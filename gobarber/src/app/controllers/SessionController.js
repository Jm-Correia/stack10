import jwt from 'jsonwebtoken';
import * as YUP from 'yup';
import User from '../models/User';
import autoConfig from '../../config/auth/auth';

class SessionController {
    async store(req, res) {
        const shema = YUP.object().shape({
            email: YUP.string()
                .email()
                .required('Email is a required'),
            password: YUP.string().required('Password is a required'),
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

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, autoConfig.secrect, {
                expiresIn: autoConfig.timeExp,
            }),
        });
    }
}

export default new SessionController();
