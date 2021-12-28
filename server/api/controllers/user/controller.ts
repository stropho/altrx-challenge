import UserService from '../../services/user.service';
import { Request, Response } from 'express';

export class Controller {
  all(_: Request, res: Response): void {
    UserService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = req.params['id'];
    UserService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  removeById(req: Request, res: Response): void {
    const id = req.params['id'];
    UserService.removeById(id).then((r) => {
      res.json(r);
    });
  }

  updateById(req: Request, res: Response): void {
    const id = req.params['id'];
    const { email, firstName, lastName, password } = req.body;
    UserService.updateById(id, firstName, lastName, email, password).then(
      (r) => {
        if (r) res.json(r);
        else res.status(404).end();
      }
    );
  }

  create(req: Request, res: Response): void {
    const { email, firstName, lastName, password } = req.body;
    UserService.create(email, firstName, lastName, password).then((r) =>
      res.status(201).location(`/api/v1/user/${r.id}`).json(r)
    );
  }
}

export default new Controller();
