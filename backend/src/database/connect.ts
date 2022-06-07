import { resolve } from 'path';
import { DataSource } from 'typeorm';

export const postgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'authentication_app',
  entities: [
    resolve(__dirname, '..', 'entities', '*.ts'),
  ],
  migrations: [
    resolve(__dirname, 'migrations', '*.ts'),
  ],
});

postgresDataSource.initialize().then(() => console.log('connected to database'));
