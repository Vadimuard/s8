import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { AutoModule } from '../auto/auto.module';
import { UserModule } from '../user/user.module';
import { ViewsModule } from '../views/views.module';
import postgresConfig from '../config/postgres.config';
import { PostgresModule } from '../postgres/postgres.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [postgresConfig],
    }),
    PostgresModule,
    ViewsModule,
    AutoModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
