//main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Dirección del frontend
    credentials: true,
  });
  await app.listen(4000); // Direccion backend
}
bootstrap();
