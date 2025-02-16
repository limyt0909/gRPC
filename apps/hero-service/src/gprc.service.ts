import { Injectable } from '@nestjs/common';

@Injectable()
export class GprcService {
  getHello(): string {
    return 'Hello World!';
  }
}
