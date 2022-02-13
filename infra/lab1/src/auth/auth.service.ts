import { Injectable, UnauthorizedException } from '@nestjs/common';
import { validatePassword } from 'src/helpers/hashPassword';
import { createSessionToken } from 'src/helpers/sessionHelper';
import { UserService } from 'src/user/user.service';
import { EmailLoginDto, PhoneNumberLoginDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async createSession(userId: number) {
    const sessionToken = await createSessionToken();
  }

  async logInWithEmail(credentials: EmailLoginDto) {
    const user = await this.userService.getByEmail(credentials.email);
    if (!user) throw new UnauthorizedException();
    if (await validatePassword(credentials.password, user.password)) {
      const sessionToken = await this.createSession(user.user_id);
    }
    return 'This action adds a new auth';
  }

  async logInWithPhoneNumber(credentials: PhoneNumberLoginDto) {
    return 'This action adds a new auth';
  }
}
