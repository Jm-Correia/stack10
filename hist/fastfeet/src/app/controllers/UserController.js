import User from '../models/User';

class UserController {
    async store(req, res) {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user) {
            return res.status(401).json({ error: 'User already exists' });
        }

        const { id, name, email } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
        });
    }
}

export default new UserController();
