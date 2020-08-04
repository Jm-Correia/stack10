import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../model/User';
import AppError from '../err/AppError';

interface Request{
    name: string,
    email: string,
    password: string
}

export default class CreateUserService {
  public async execute({ name, email, password }: Request):Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExiste = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExiste) {
      throw new AppError('User already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    await userRepository.save(user);
    delete user.password;
    return user;
  }
}
