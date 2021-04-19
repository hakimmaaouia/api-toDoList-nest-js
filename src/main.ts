import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config'
import { Console } from 'node:console';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configserver = config.get('server')
  await app.listen(process.env.PORT||configserver.prot);

}
bootstrap();
