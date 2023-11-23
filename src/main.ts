import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import helmet from 'helmet'
import * as compression from 'compression'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //register all plugins and extension
  app.enableCors({ origin: '*' })
  app.useGlobalPipes(new ValidationPipe({}))
  app.use(helmet())
  app.use(compression())
  await app.listen(3000);
}
bootstrap();
