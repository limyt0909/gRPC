import { Injectable } from '@nestjs/common';

interface Hero {
  id: number;
  name: string;
  power: number;
}

@Injectable()
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: 'Superman', power: 100 },
    { id: 2, name: 'Batman', power: 50 },
  ];

  findOne(id: number): Hero {
    return (
      this.heroes.find((hero) => hero.id === id) || {
        id: 0,
        name: 'Unknown',
        power: 0,
      }
    );
  }
}
