import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class HttpBearerStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string, done): Promise<any> {
    const userId = await this.authService.validateSession(token);
    if (!userId) {
      throw new UnauthorizedException();
    }
    done(null, userId, { scope: 'all' });
  }
}
