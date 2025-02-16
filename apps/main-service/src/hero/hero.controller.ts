import { Controller, Get, Param } from '@nestjs/common';
import { HeroServiceClient } from './hero.service';

@Controller('heroes')
export class HeroController {
  constructor(private readonly heroService: HeroServiceClient) {}

  @Get(':id')
  async getHero(@Param('id') id: number) {
    return this.heroService.findOne(Number(id)).toPromise();
  }
}
