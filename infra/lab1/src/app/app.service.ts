import { Injectable } from '@nestjs/common';
import { PostgresService } from 'src/postgres/postgres.service';

@Injectable()
export class AppService {
  constructor(private pg: PostgresService) {}

  async pingPostgres() {
    try {
      const res = await this.pg.executeQuery(`
        SELECT 1;
      `);
      return {
        success: res.length > 0,
      };
    } catch (err) {
      console.error(err);
      return {
        success: false,
      };
    }
  }
}
