import { User } from '@database/entities/user.entity';
import { UsersService } from '@modules/users/users.service';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JWT_CONSTANTS } from './jwt-constants';
import { CryptoService } from './crypto.service';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register(JWT_CONSTANTS),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    AuthService,
    UsersService,
    CryptoService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}

