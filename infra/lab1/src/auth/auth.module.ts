import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PostgresModule } from '../postgres/postgres.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, PostgresModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
