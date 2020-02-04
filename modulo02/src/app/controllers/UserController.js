import * as YUP from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const shema = YUP.object().shape({
            name: YUP.string().required(),
            email: YUP.string()
                .email()
                .required(),
            password: YUP.string()
                .min(6)
                .required(),
            provider: YUP.boolean(),
        });

        const errors = await shema
            .validate(req.body, {
                strict: true,
                abortEarly: false,
                recursive: true,
            })
            .catch(err => err.errors);

        if (!(await shema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'ValidationError', message: errors });
        }

        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const { id, name, email, provider } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            provider,
        });
    }

    async update(req, res) {
        const shema = YUP.object().shape({
            name: YUP.string(),
            email: YUP.string().email(),
            oldPassword: YUP.string().min(6),
            password: YUP.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: YUP.string()
                .min(6)
                .when('password', (password, field) =>
                    password
                        ? field.required().oneOf([YUP.ref('password')])
                        : field
                ),
            provider: YUP.boolean(),
        });

        const errors = await shema
            .validate(req.body, {
                strict: true,
                abortEarly: false,
                recursive: true,
            })
            .catch(err => err.errors);

        if (!(await shema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'ValidationError', message: errors });
        }

        const { oldPassword, email } = req.body;

        const user = await User.findByPk(req.userId);

        if (email && email !== user.email) {
            const userExists = await User.findOne({ where: { email } });

            if (userExists) {
                return res.status(401).json({ error: 'User already exists' });
            }
        }

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Password Invalid' });
        }

        const { id, name, provider } = await user.update(req.body);

        return res.json({
            id,
            name,
            email,
            provider,
        });
    }
}

export default new UserController();
