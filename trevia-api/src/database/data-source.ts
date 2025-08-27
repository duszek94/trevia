import { DataSource } from 'typeorm';
import { DATA_SOURCE_OPTIONS } from './data-source-options';

export default new DataSource({
  ...DATA_SOURCE_OPTIONS,
  entities: ['src/database/entities/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
