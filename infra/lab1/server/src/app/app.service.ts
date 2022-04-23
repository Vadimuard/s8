import { Injectable } from '@nestjs/common';
import { PostgresService } from '../postgres/postgres.service';

@Injectable()
export class AppService {
  constructor(private pg: PostgresService) {}
}
