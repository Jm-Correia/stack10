import { Router } from 'express';

import AuthenticateUserSevice from '../services/AuthenticateUserSevice';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserSevice();

  const session = await authenticateUser.execute({
    email, password,
  });

  return response.json(session);
});

export default sessionRouter;
