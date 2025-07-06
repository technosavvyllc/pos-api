import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { PrismaModule } from './prisma/prisma.module';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { CustomResponseMiddleware } from './common/middleware/response';
import { winstonLogger } from './common/utils/winston-logger';

@Module({
  imports: [
    AuthenticationModule,
    PrismaModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    WinstonModule.forRoot({
      instance: winstonLogger,
      transports: winstonLogger.transports,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CustomResponseMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
