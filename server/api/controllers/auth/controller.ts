import { Request, Response } from 'express';
import UserService from '../../services/user.service';
import L from '../../../common/logger';
import { AUTH_COOKIE_NAME } from '../../../common/constants';

export class Controller {
  logout(_: Request, res: Response): void {
    L.info(`Log out`);

    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('../');
  }

  login(req: Request, res: Response): void {
    L.info(`Log in`, req.body, req);
    const { email, password } = req.body;
    UserService.validateCredentials(email, password).then((userId) => {
      if (userId) {
        res.cookie(AUTH_COOKIE_NAME, userId);
      }
      res.redirect('../');
    });
  }
}

export default new Controller();
