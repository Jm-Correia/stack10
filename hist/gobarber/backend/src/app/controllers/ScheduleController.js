import { startOfDay, endOfDay, parseISO, formatISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
    async index(req, res) {
        const checkUserProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });

        if (!checkUserProvider) {
            return res.status(401).json({
                error: 'User is not a provider',
            });
        }

        const { data = formatISO(new Date()) } = req.query;
        const parseDate = parseISO(data, { additionalDigits: 0 });

        const appointments = await Appointment.findAll({
            where: {
                provider_id: req.userId,
                canceled_at: null,
                data: {
                    [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
                },
            },
        });

        return res.json(appointments);
    }
}

export default new ScheduleController();
