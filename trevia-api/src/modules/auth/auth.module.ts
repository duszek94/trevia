import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JWT_CONSTANTS } from './constants';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register(JWT_CONSTANTS),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    AuthService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}

