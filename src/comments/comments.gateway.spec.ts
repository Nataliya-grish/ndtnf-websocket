import { Test, TestingModule } from '@nestjs/testing';
import { CommentsGateway } from './comments.gateway';
import { BookCommentsService } from './comments.service';

describe('CommentsGateway', () => {
  let gateway: CommentsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsGateway, BookCommentsService],
    }).compile();

    gateway = module.get<CommentsGateway>(CommentsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});