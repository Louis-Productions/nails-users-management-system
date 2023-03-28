import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
// somewhere in your initialization file

dotenv.config(); // Read base environment (.env) from root

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 3000;
  await app.listen(3000, () =>
    console.log(`Sever is listening on PORT: ${PORT}`),
  );
}
bootstrap();
