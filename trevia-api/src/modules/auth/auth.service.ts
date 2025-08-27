import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async signIn(name: string, pass: string): Promise<JwtResponse> {
    const user = await this.usersService.findOne(name);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.name };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
