import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface HeroById {
  id: number;
}

interface Hero {
  id: number;
  name: string;
  power: number;
}

@Controller()
export class HeroController {
  private heroes: Hero[] = [
    { id: 1, name: 'Superman', power: 100 },
    { id: 2, name: 'Batman', power: 50 },
    { id: 3, name: 'DragonTack', power: 50 },
  ];

  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById): Hero {
    console.log(data);
    return (
      this.heroes.find((hero) => hero.id === data.id) || {
        id: 0,
        name: 'Unknown',
        power: 0,
      }
    );
  }
}
