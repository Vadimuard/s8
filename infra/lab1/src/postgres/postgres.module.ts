import { Logger, Module, OnApplicationShutdown } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModuleRef } from '@nestjs/core';
import { Pool } from 'pg';
import { PostgresService } from './postgres.service';

const databasePoolFactory = async (configService: ConfigService) => {
  return new Pool(configService.get('postgres'));
};

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'POSTGRES_POOL',
      inject: [ConfigService],
      useFactory: databasePoolFactory,
    },
    PostgresService,
  ],
  exports: [PostgresService],
})
export class PostgresModule implements OnApplicationShutdown {
  private readonly logger = new Logger(PostgresModule.name);

  constructor(private readonly moduleRef: ModuleRef) {}

  onApplicationShutdown(signal?: string): any {
    this.logger.log(`Shutting down on signal ${signal}`);
    const pool = this.moduleRef.get('POSTGRES_POOL') as Pool;
    return pool.end();
  }
}
