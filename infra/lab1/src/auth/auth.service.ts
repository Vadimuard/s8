import { Injectable, UnauthorizedException } from '@nestjs/common';
import { validatePassword } from '../helpers/hashPassword';
import { createSessionToken } from '../helpers/sessionHelper';
import { PostgresService } from '../postgres/postgres.service';
import { UserService } from '../user/user.service';
import { EmailLoginDto, PhoneNumberLoginDto } from './dto/create-auth.dto';
import { Session } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private pg: PostgresService) {}

  async createSession(userId: number): Promise<string> {
    const { token, hashedToken } = await createSessionToken();
    const qs = `INSERT INTO auto_dealer.session (token, user_id) VALUES ($1, $2)`;
    await this.pg.executeQuery(qs, [hashedToken, userId]);
    return token as string;
  }

  async logInWithEmail(credentials: EmailLoginDto): Promise<string> {
    const user = await this.userService.getByEmail(credentials.email);
    if (!user) throw new UnauthorizedException();
    if (await validatePassword(credentials.password, user.password)) {
      return await this.createSession(user.user_id);
    }
    return null;
  }

  async logInWithPhoneNumber(
    credentials: PhoneNumberLoginDto,
  ): Promise<string> {
    const user = await this.userService.getByPhoneNumber(
      credentials.phone_number,
    );
    if (!user) throw new UnauthorizedException();
    if (await validatePassword(credentials.password, user.password)) {
      return await this.createSession(user.user_id);
    }
    return null;
  }

  async getSessionByToken(token: string): Promise<Session> {
    const qs = `SELECT user_id FROM auto_dealer.session WHERE token = $1`;
    const [session] = await this.pg.executeQuery(qs, [token]);
    return session;
  }
}
