import * as YUP from 'yup';
import { parseISO, startOfHour, isBefore, format, subHours } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import Notification from '../schemas/Notification';
import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class AppointmentController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, canceled_at: null },
            order: ['data'],
            attributes: ['id', 'data'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: File,
                            as: 'avatar',
                            attributes: ['path', 'url'],
                        },
                    ],
                },
            ],
        });
        res.json(appointments);
    }

    async store(req, res) {
        const schema = YUP.object().shape({
            provider_id: YUP.number().required(),
            date: YUP.date().required(),
        });

        if (!(await schema.isValid(req.body))) {
            const errors = await schema
                .validate(req.body, {
                    strict: false,
                    abortEarly: false,
                    recursive: true,
                })
                .catch(err => {
                    return err.errors;
                });
            return res
                .status(400)
                .json({ error: 'ValidationError', message: errors });
        }
        const { provider_id, date } = req.body;

        /**
         * Check provider_id is a provider
         */
        const isProvider = await User.findOne({
            where: { id: provider_id, provider: true },
        });
        if (!isProvider) {
            return res.status(401).json({
                error: `You can only create appointments for providers`,
            });
        }

        /**
         * Check for past date
         */

        const hourStart = startOfHour(parseISO(date));

        if (isBefore(hourStart, new Date())) {
            return res
                .status(400)
                .json({ error: 'Past dates are not permitted' });
        }

        /**
         * Check date availabity
         */

        const checkAvailabity = await Appointment.findOne({
            where: {
                provider_id,
                canceled_at: null,
                data: hourStart,
            },
        });

        if (checkAvailabity) {
            return res
                .status(400)
                .json({ error: 'Appointment date is not Available' });
        }

        const appointments = await Appointment.create({
            user_id: req.userId,
            provider_id,
            data: date,
        });

        /**
         * Notify appointment Provider
         */

        const user = await User.findByPk(req.userId);
        const dia = format(hourStart, " dd 'de' MMMM', às' H:mm'h'");

        await Notification.create({
            content: `Novo Agendamento de ${user.name} para dia ${dia}`,
            user: provider_id,
        });

        return res.json(appointments);
    }

    async delete(req, res) {
        const appointment = await Appointment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['name', 'email'],
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                },
            ],
        });

        if (appointment.user_id !== req.userId) {
            return res.status(401).json({
                error: "You don't have permission to cancel this appointment",
            });
        }

        const dateWithSub = subHours(appointment.data, 2);

        if (isBefore(dateWithSub, new Date())) {
            return res.status(401).json({
                error: 'You can only cancel appointments 2 hours in advence.',
            });
        }
        await Queue.add(CancellationMail.key, { appointment });

        appointment.canceled_at = new Date();
        await appointment.save();
        return res.json({ appointment });
    }
}

export default new AppointmentController();
