import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import User from '../model/User';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

import auth from '../middleware/auth';
import uploadConfig from '../config/upload';

const userRouter = Router();

const upload = multer(uploadConfig);

userRouter.get('/', auth, async (request, response) => {
  const { id } = request.user;
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({
    where: { id },
  });
  return response.json(user);
});

userRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({ name, email, password });

  return response.json(user);
});

userRouter.patch('/avatar', auth, upload.single('avatar'), async (request, response) => {
  const { id } = request.user;
  const updateService = new UpdateUserAvatarService();

  const user = await updateService.execute({
    user_id: id,
    avatarFilename: request.file.filename,
  });

  delete user.password;
  return response.status(200).json({ user });
});

export default userRouter;
