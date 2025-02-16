import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.mdoule';

@Module({
  imports: [HeroModule],
})
export class AppModule {}
