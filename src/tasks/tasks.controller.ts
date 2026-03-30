import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel } from '../generated/prisma/models/Task';
import { Prisma } from '../generated/prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getAllTasks(): Promise<TaskModel[]> {
    return this.taskService.getAllPosts();
  }

  @Post()
  createTask(@Body() data: Prisma.TaskCreateInput): Promise<TaskModel> {
    return this.taskService.createTask(data);
  }
}
