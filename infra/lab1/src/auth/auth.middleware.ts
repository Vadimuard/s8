import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;
    const session = await this.authService.getSessionByToken(authToken);
    if (session) {
      req.body.userId = session.user_id;
      next();
    } else {
      throw new UnauthorizedException();
    }
  }
}
