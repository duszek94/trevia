import { JwtResponse, SignInDto } from '@models';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './is-public.decorator';
import express from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  public signIn(
    @Body() signInDto: SignInDto,
    @Response({ passthrough: true }) response: express.Response,
  ): Promise<JwtResponse> {
    return this.authService.signIn(signInDto.name, signInDto.password, response);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  public getProfile(@Request() req): any {
    return req.user;
  }
}
