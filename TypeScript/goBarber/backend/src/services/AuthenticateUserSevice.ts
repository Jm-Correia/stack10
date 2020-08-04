import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../model/User';
import AppError from '../err/AppError';

interface Request{
    email: string,
    password: string
}

interface Response{
    name: string,
    create_at: Date,
    updated_at: Date
}

export default class AuthenticateUserSevice {
  public async execute({ email, password }:Request): Promise<{data: Response, token: string}> {
    const userRespository = getRepository(User);

    const user = await userRespository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError('Email or password does not match', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Email or password does not match', 401);
    }
    const data: Response = {
      name: user.name,
      create_at: user.created_at,
      updated_at: user.updated_at,
    };
    return {
      data,
      token: sign({}, 'a', {
        subject: user.id,
        expiresIn: '1d',
      }),
    };
  }
}
