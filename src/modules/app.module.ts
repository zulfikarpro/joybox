import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_PIPE, BaseExceptionFilter } from '@nestjs/core';
import { Config } from '../types/appConfig.type';
import { BookStoreModule } from './bookStore/bookStore.module';

export function moduleFactory(config: Config): any {
  @Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [(): any => config],
      }),
      BookStoreModule,
    ],
    controllers: [],
    providers: [
      {
        provide: APP_PIPE,
        useValue: ValidationPipe,
      },
      {
        provide: APP_FILTER,
        useClass: BaseExceptionFilter,
      },
    ],
  })
  class AppModule {}

  return AppModule;
}
