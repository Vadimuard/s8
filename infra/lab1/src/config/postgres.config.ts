import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: 'auto_dealer',
}));
