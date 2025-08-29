import configuration from '@/configuration';
import { DataSourceOptions } from 'typeorm';

const { database } = configuration();

export const DATA_SOURCE_OPTIONS: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: database.name,
  username: database.user,
  password: database.password,
};
