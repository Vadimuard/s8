import { Inject, Injectable } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class PostgresService {
  constructor(@Inject('POSTGRES_POOL') private pool: Pool) {}

  executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
    return this.pool.query(queryText, values).then((result: QueryResult) => {
      return result.rows;
    });
  }

  async getOne(queryText: string, values: any[] = []): Promise<any> {
    const result = await this.executeQuery(queryText, values);
    return result[0];
  }
}
