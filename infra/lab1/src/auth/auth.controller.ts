import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailLoginDto, PhoneNumberLoginDto } from './dto/create-auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('emailLogin')
  async logInWithEmail(@Body() emailLoginDto: EmailLoginDto) {
    return this.authService.logInWithEmail(emailLoginDto);
  }
  @Post('phoneLogin')
  logInWithPhoneNumber(@Body() phoneNumberLoginDto: PhoneNumberLoginDto) {
    return this.authService.logInWithPhoneNumber(phoneNumberLoginDto);
  }
}
