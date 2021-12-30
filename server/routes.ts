import { Application } from 'express';
import userRouter from './api/controllers/user/router';
import authRouter from './api/controllers/auth/router';

export default function routes(app: Application): void {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/auth', authRouter);
}
