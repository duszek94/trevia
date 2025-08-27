import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import type { SignIn } from 'src/interfaces/sign-in.interface';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './is-public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  public signIn(@Body() signInDto: SignIn): Promise<JwtResponse> {
    console.log('SignIn DTO:', signInDto);

    return this.authService.signIn(signInDto.name, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  public getProfile(@Request() req): any {
    return req.user;
  }
}
