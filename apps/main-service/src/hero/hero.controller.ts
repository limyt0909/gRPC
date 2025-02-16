import { Controller, Get, Param } from '@nestjs/common';
import { HeroServiceClient } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroServiceClient) {}

  @Get(':id')
  async getHero(@Param('id') id: number) {
    const result = this.heroService.findOne(Number(id));
    return result;
  }
}
