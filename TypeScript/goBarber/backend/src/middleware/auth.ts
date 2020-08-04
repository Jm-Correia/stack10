import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import AppError from '../err/AppError';

interface TokenPayload{
    iat: number,
    exp: number,
    sub:string
}

export default (request:Request, response:Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  try {
    const [, token] = authHeader.split(' ');
    const decoded = verify(token, 'a');

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
};
