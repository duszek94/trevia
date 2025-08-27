import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_SOURCE_OPTIONS } from './data-source-options';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DATA_SOURCE_OPTIONS,
      entities: [User],
    }),
  ],
})
export class DatabaseModule {}
