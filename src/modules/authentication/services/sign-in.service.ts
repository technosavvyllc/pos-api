import { Injectable } from '@nestjs/common';
import { SignInRepository } from '../repositories';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { badRequest } from '@hapi/boom';
import { messages } from '../../../common/constants/messages';
import { SignInDto } from '../dto/sign-in.dto';
import { TokensDTO } from '../dto/token.dto';

@Injectable()
export class SignInService {
  constructor(
    private readonly signInRepository: SignInRepository,
    private passwordService: PasswordService,
    private tokenService: TokenService,
  ) {}

  async login(signInDto: SignInDto): Promise<TokensDTO> {
    const user = await this.signInRepository.getUserForSignIn(signInDto.email);
    if (!user) {
      throw badRequest(messages.USER.INVALID_CREDENTIALS);
    }

    const passwordsMatch = await this.passwordService.comparePassword(
      signInDto.password,
      user.password,
    );
    if (!passwordsMatch) {
      throw badRequest(messages.USER.INVALID_CREDENTIALS);
    }
    return this.tokenService.generateTokens(user.id);
  }
}
