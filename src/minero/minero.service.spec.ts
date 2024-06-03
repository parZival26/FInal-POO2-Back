import { Test, TestingModule } from '@nestjs/testing';
import { MineroService } from './minero.service';

describe('MineroService', () => {
  let service: MineroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MineroService],
    }).compile();

    service = module.get<MineroService>(MineroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
