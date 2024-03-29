import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', async () => {
    expect(controller).toBeDefined();
    expect(await controller.findAll({})).toEqual([
      {
        username: 'luannguyen',
        age: 26,
      },
      {
        username: 'louisnguyen',
        age: 28,
      },
    ]);
  });
});
