import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Task, Prisma } from '../generated/prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllPosts(): Promise<Task[]> {
    return this.databaseService.task.findMany();
  }

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.databaseService.task.create({ data });
  }
}
