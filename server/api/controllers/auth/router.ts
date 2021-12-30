import express from 'express';
import controller from './controller';

const router = express
  .Router()
  .post('/', controller.login)
  .get('/', controller.logout);

export default router;
