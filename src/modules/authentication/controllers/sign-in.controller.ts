import { Body, Controller, Post } from '@nestjs/common';
import { messages } from '../../../common/constants/messages';
import { SignInService } from '../services/sign-in.service';
import { SignInDto } from '../dto/sign-in.dto';
import { TokensDTO } from '../dto/token.dto';

@Controller('sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  async login(
    @Body() signInDto: SignInDto,
  ): Promise<{ data: TokensDTO; message: string }> {
    const tokens = await this.signInService.login(signInDto);
    return {
      data: tokens,
      message: messages.USER.LOGGED_IN_SUCCESSFULLY,
    };
  }
}
