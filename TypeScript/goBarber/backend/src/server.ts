import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import uploadConfig from './config/upload';
import './database';
import AppError from './err/AppError';

const server = express();

server.use(express.json());
server.use('/files', express.static(uploadConfig.diretory));
server.use(routes);

server.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

server.listen(3333, () => {
  console.log('Server stated on port 3333');
});
