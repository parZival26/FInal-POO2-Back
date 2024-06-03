import { Test, TestingModule } from '@nestjs/testing';
import { MineroController } from './minero.controller';

describe('MineroController', () => {
  let controller: MineroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MineroController],
    }).compile();

    controller = module.get<MineroController>(MineroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
