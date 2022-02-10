import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PostgresModule } from 'src/postgres/postgres.module';

@Module({
  imports: [PostgresModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
