import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '../model/User';
import UploadConfig from '../config/upload';
import AppError from '../err/AppError';

interface Request{
    user_id: string,
    avatarFilename: string
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }:Request):Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only Authenticated users can change avatar', 401);
    }
    if (user.avatar) {
      const userAvatarFilePath = path.join(UploadConfig.diretory, user.avatar);

      const fileExists = await fs.promises.stat(userAvatarFilePath);
      if (fileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFilename;
    await userRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
