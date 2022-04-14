module.exports = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: 'auto_dealer',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
