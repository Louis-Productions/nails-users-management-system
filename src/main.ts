import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Read base environment (.env) from root

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 3000;
  await app.listen(3000, () =>
    console.log(`Sever is listening on PORT: ${PORT}`),
  );
}
bootstrap();
