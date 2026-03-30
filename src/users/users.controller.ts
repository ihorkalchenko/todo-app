import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from '../generated/prisma/models/User';
import { Prisma } from '../generated/prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(
    @Query() params: Prisma.UserFindManyArgs = {},
  ): Promise<UserModel[]> {
    return this.usersService.getAllUsers(params);
  }

  @Post()
  async create(@Body() data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.usersService.createUser(data);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserModel | null> {
    return this.usersService.findUser({ id: Number(id) });
  }
}
