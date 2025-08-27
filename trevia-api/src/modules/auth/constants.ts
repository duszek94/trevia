import { JwtModuleOptions } from '@nestjs/jwt';

export const JWT_CONSTANTS: JwtModuleOptions = {
  global: true,
  signOptions: { expiresIn: '60m' },
  // TODO: parametrize via env variables
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
