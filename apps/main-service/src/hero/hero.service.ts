import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { HeroById, HeroService } from './hero.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HeroServiceClient implements OnModuleInit {
  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  findOne(id: number): Observable<any> {
    return this.heroService.FindOne({ id });
  }
}
