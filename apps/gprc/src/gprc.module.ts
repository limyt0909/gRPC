import { Module } from '@nestjs/common';
import { GprcController } from './gprc.controller';
import { GprcService } from './gprc.service';

@Module({
  imports: [],
  controllers: [GprcController],
  providers: [GprcService],
})
export class GprcModule {}
