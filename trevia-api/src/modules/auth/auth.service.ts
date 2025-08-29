import { JwtResponse } from '@models';
import { UsersService } from '@modules/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from './crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly cryptoService: CryptoService,
  ) {}

  public async signIn(name: string, password: string): Promise<JwtResponse> {
    const user = await this.usersService.findOne(name);

    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordMatches = await this.cryptoService.comparePassword(
      password,
      user.password,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.name };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
