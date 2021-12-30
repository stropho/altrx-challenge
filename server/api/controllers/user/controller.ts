import UserService from '../../services/user.service';
import { Request, Response } from 'express';
import { AUTH_COOKIE_NAME } from '../../../common/constants';

export class Controller {
  all(_: Request, res: Response): void {
    UserService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const requestedId = req.params['id'];
    const id =
      requestedId === 'whoami' ? req.cookies[AUTH_COOKIE_NAME] : requestedId;
    UserService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  removeById(req: Request, res: Response): void {
    const id = req.params['id'];
    const currentUserId = req.cookies[AUTH_COOKIE_NAME];
    UserService.removeById(id, currentUserId).then((r) => {
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
