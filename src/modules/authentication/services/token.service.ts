import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { badRequest } from '@hapi/boom';
import { messages } from '../../../common/constants/messages';
import { TokensDTO } from '../dto/token.dto';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(userId: number): Promise<TokensDTO> {
    const payload = { userId };

    // Get the expiry values
    const accessTokenExpiry = this.configService.get<string>(
      'jwt.accessTokenExpiry',
    );
    const refreshTokenExpiry = this.configService.get<string>(
      'jwt.refreshTokenExpiry',
    );

    // If undefined, throw an error
    if (!accessTokenExpiry) {
      throw badRequest(messages.AUTH.ACCESS_TOKEN_NOT_SET);
    }

    if (!refreshTokenExpiry) {
      throw badRequest(messages.AUTH.REFRESH_TOKEN_NOT_SET);
    }

    return {
      user_access_token: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('jwt.accessTokenSecret'),
        expiresIn: isNaN(Number(accessTokenExpiry))
          ? accessTokenExpiry
          : Number(accessTokenExpiry),
      }),
      user_refresh_token: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('jwt.refreshTokenSecret'),
        expiresIn: isNaN(Number(refreshTokenExpiry))
          ? refreshTokenExpiry
          : Number(refreshTokenExpiry),
      }),
    };
  }
}
