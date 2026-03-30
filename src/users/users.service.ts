import { ConflictException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { User, Prisma } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllUsers(params: Prisma.UserFindManyArgs = {}): Promise<User[]> {
    return this.databaseService.user.findMany(params);
  }

  async findUser(
    userFindInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.databaseService.user.findUnique({
      where: userFindInput,
    });
  }

  async createUser(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    const password = await bcrypt.hash(userCreateInput.password, 10);

    return this.databaseService.user
      .create({ data: { ...userCreateInput, password } })
      .catch((err) => {
        if (
          err instanceof Prisma.PrismaClientKnownRequestError &&
          err.code === 'P2002'
        ) {
          throw new ConflictException('A user with this email already exists');
        }
        throw err;
      });
  }
}
