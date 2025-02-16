import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroServiceClient } from './hero.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, '../../../proto/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [HeroController],
  providers: [HeroServiceClient],
})
export class HeroModule {}
