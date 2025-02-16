import { NestFactory } from '@nestjs/core';
import { GprcModule } from './gprc.module';

async function bootstrap() {
  const app = await NestFactory.create(GprcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
