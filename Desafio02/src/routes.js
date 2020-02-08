import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientesController';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.use(auth);
routes.post('/recipients', RecipientsController.store);
routes.put('/recipients', RecipientsController.update);

export default routes;
