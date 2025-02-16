import { Test, TestingModule } from '@nestjs/testing';
import { GprcController } from './gprc.controller';
import { GprcService } from './gprc.service';

describe('GprcController', () => {
  let gprcController: GprcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GprcController],
      providers: [GprcService],
    }).compile();

    gprcController = app.get<GprcController>(GprcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gprcController.getHello()).toBe('Hello World!');
    });
  });
});
