import { Observable } from 'rxjs';

export interface HeroById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
  power: number;
}

export interface HeroService {
  FindOne(data: HeroById): Observable<Hero>;
}
