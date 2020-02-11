import * as YUP from 'yup';
import { parseISO, startOfHour, isBefore } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';

class AppointmentController {
    async index(req, res) {
        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, canceled_at: null },
            order: ['data'],
            attributes: ['id', 'data'],
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

        const errors = await schema
            .validate(req.body, {
                abortEarly: false,
                recursive: true,
            })
            .catch(err => err.errors);

        if (!(await schema.isValid(req.body))) {
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

        return res.json(appointments);
    }
}

export default new AppointmentController();
