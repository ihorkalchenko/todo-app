import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { DatabaseModule } from '../database/database.module';
import { TasksController } from './tasks.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
