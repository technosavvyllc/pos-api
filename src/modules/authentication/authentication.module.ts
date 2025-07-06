import { Module } from '@nestjs/common';
import { SignInRepository } from './repositories';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { SignInController } from './controllers/sign-in.controller';
import { SignInService } from './services/sign-in.service';
import { PasswordService } from './services/password.service';
import { TokenService } from './services/token.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const expiry = configService.get<string>('jwt.accessTokenExpiry');

        if (!expiry) {
          throw new Error(
            'JWT_ACCESS_TOKEN_EXPIRY is missing in the environment variables',
          );
        }

        return {
          secret: configService.get<string>(
            'jwt.accessTokenSecret',
            'defaultSecret',
          ),
          signOptions: {
            expiresIn: isNaN(parseInt(expiry)) ? expiry : parseInt(expiry), // Use string if valid, otherwise parse number
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [SignInController],
  providers: [
    JwtStrategy,
    SignInService,
    PasswordService,
    PrismaService,
    TokenService,
    SignInRepository,
  ],
  exports: [JwtModule],
})
export class AuthenticationModule {}
