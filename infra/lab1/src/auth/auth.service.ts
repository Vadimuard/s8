import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validatePassword } from '../helpers/hashPassword';
import { createSessionToken } from '../helpers/sessionHelper';
import { PublicUser } from '../user/entities/publicUser.entity';
import { UserService } from '../user/user.service';
import { Session } from './entities/session.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
    private userService: UserService,
  ) {}

  async validateUser(email: string, password: string): Promise<PublicUser> {
    const user = await this.userService.findOne(email);
    if (!user || !(await validatePassword(password, user.password))) {
      return null;
    }
    return user.toPublic();
  }

  async validateSession(token: string): Promise<number> {
    const session = await this.sessionRepository
      .createQueryBuilder('session')
      .select('session.user_id', 'userId')
      .where(
        "session.token = :token AND created_at < NOW() + INTERVAL '3 DAY'",
        { token },
      )
      .getRawOne();
    if (!session) return 0;
    return session.userId;
  }

  async createSession(userId: number): Promise<string> {
    const { token, hashedToken } = await createSessionToken();

    this.sessionRepository.save({
      token: hashedToken,
      userId: userId,
    });

    return token as string;
  }
}
