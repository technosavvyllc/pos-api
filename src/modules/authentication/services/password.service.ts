import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PasswordService {
  async hashPassword(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, 10);
  }

  async comparePassword(
    plainText: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainText, hashedPassword);
  }
}
