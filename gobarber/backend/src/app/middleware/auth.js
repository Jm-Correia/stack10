import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth/auth';

module.exports = async function verifySession(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token is required' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secrect);
        /**
         * Precisa Verificar se o token está expirado aqui, não?
         */
        req.userId = decoded.id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};
