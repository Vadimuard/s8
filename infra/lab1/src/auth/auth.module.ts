import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { HttpBearerStrategy } from './http-bearer.strategy';
import { AuthController } from './auth.controller';
import { Session } from './entities/session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, PassportModule, TypeOrmModule.forFeature([Session])],
  providers: [AuthService, HttpBearerStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
