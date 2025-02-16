import { Controller, Get } from '@nestjs/common';
import { GprcService } from './gprc.service';

@Controller()
export class GprcController {
  constructor(private readonly gprcService: GprcService) {}

  @Get()
  getHello(): string {
    return this.gprcService.getHello();
  }
}
