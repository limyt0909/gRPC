import { NestFactory } from '@nestjs/core';
import { AppModule } from './gprc.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, '../../proto/hero.proto'),
      },
    },
  );

  await app.listen();
  console.log('Hero gRPC Microservice is running...');
}

bootstrap();
