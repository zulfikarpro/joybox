import { NestFactory } from '@nestjs/core';
import { mapConfig } from './config.mapper';
import { moduleFactory } from './modules/app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(moduleFactory(mapConfig(process.env)));
  app.enableCors();
  await app.listen(port);
  console.info(`server start at port ${process.env.APP_PORT}`);
}
bootstrap();
