import express from 'express';
import controller from './controller';

const router = express
  .Router()
  .post('/', controller.create)
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .put('/:id', controller.updateById)
  .delete('/:id', controller.removeById);

export default router;
