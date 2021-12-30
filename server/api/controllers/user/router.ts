import express from 'express';
import controller from './controller';
import authHandler from '../../middlewares/auth.handler';

const router = express
  .Router()
  .use(authHandler)
  .post('/', controller.create)
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .put('/:id', controller.updateById)
  .delete('/:id', controller.removeById);

export default router;
