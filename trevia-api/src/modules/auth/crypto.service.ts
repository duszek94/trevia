import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptoService {
  public async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return hash;
  }

  public async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
