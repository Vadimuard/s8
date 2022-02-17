import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PostgresModule } from 'src/postgres/postgres.module';

@Module({
  imports: [UserModule, PostgresModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
