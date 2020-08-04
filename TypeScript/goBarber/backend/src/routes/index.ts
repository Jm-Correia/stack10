import { Router } from 'express';

import appointmentRouter from './appointments.routes';
import userRouter from './users.routes';
import sessionRoute from './session.routes';

const routes = Router();

routes.use('/session', sessionRoute);

routes.use('/appointments', appointmentRouter);

routes.use('/users', userRouter);

export default routes;
