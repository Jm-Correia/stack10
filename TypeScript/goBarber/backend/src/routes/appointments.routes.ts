import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import Repository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import auth from '../middleware/auth';

const appointmentRouter = Router();
appointmentRouter.use(auth);

appointmentRouter.get('/', async (request, response) => {
  const appointmentRepository = getCustomRepository(Repository);
  const appointments = await appointmentRepository.find();
  return response.json(appointments);
});

appointmentRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;
  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });
  return response.json(appointment);
});

export default appointmentRouter;
