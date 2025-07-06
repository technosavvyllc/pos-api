import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenPayload } from '../types';
import { badRequest } from '@hapi/boom';
import { messages } from '../../../common/constants/messages';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    const secretOrKey = configService.get<string>('jwt.accessTokenSecret');

    if (!secretOrKey) {
      throw badRequest(messages.AUTH.JWT_SECRET_NOT_SET);
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey,
    });
  }

  async validate(payload: AccessTokenPayload) {
    if (!payload || !payload.userId) {
      console.error('Invalid JWT Payload:', payload);
      throw badRequest(messages.AUTH.INVALID_TOKEN);
    }
    return {
      userId: payload.userId,
    };
  }
}
