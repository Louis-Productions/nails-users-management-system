import { Controller, Get, HttpCode, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  @HttpCode(200)
  async findAll(@Query() filters) {
    const result = [
      {
        username: 'luannguyen',
        age: 26,
      },
      {
        username: 'louisnguyen',
        age: 28,
      },
    ];
    return result;
  }
}
