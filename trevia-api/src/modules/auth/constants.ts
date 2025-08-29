import configuration from '@/configuration';
import { JwtModuleOptions } from '@nestjs/jwt';

const { jwtSecret } = configuration();

export const JWT_CONSTANTS: JwtModuleOptions = {
  global: true,
  secret: jwtSecret,
  signOptions: { expiresIn: '60m' },
};
