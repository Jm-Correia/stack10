import Recipients from '../models/Recipientes';

class RecipientesController {
    async store(req, res) {
        const { user_id } = req.body;

        if (!user_id) {
            return res.status(400).json({ error: 'User does not Provider' });
        }

        const {
            id,
            address_line,
            zipcode,
            city,
            state,
            country,
        } = await Recipients.create(req.body);

        return res.json({
            id,
            user_id,
            address_line,
            zipcode,
            city,
            state,
            country,
        });
    }

    async update(req, res) {
        const { id, user_id } = req.body;

        if (!id || !user_id) {
            return res
                .status(400)
                .json({ error: 'Recipient.id / User.id required' });
        }

        const recipients = await Recipients.findByPk(id);

        if (!recipients) {
            return res.status(400).json({ error: 'Recipients not found' });
        }

        if (recipients && recipients.user_id !== user_id) {
            return res.status(400).json({ error: 'User not matched' });
        }

        const {
            address_line,
            zipcode,
            city,
            state,
            country,
        } = await recipients.update(req.body);

        return res.json({
            id,
            user_id,
            address_line,
            zipcode,
            city,
            state,
            country,
        });
    }
}

export default new RecipientesController();
