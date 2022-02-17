import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { EmailLoginDto, PhoneNumberLoginDto } from './dto/create-auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('emailLogin')
  async logInWithEmail(
    @Res({ passthrough: true }) response: Response,
    @Body() emailLoginDto: EmailLoginDto,
  ) {
    const token = await this.authService.logInWithEmail(emailLoginDto);
    response.setHeader('Authorization', token);
  }
  @Post('phoneLogin')
  async logInWithPhoneNumber(
    @Res({ passthrough: true }) response: Response,
    @Body() phoneNumberLoginDto: PhoneNumberLoginDto,
  ) {
    const token = await this.authService.logInWithPhoneNumber(
      phoneNumberLoginDto,
    );
    response.setHeader('Authorization', token);
  }
}
