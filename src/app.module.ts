import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
