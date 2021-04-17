import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { todo } from './interface/to-do.interface';
import { createToDODto } from './dto/createToDo.dto';
import { delimiter } from 'node:path';
@Controller('to-do')
export class ToDoController {
  constructor(private readonly todoservise: ToDoService) {}
  @Get(':id')
  findById(@Param('id') id: number): todo {
    return this.todoservise.findById(id);
  }
  @Get()
  findAll(): todo[] {
    return this.todoservise.findAll();
  }
  @Post()
  CreateToDo(@Body() newToDo: createToDODto): todo {
    return this.todoservise.createToDo(newToDo);
  }
  @Patch(':id')
  updateToDO(@Param('id') id: number, @Body() patch: any): any {
    return this.todoservise.updateToDO(id, patch);
  }
  @Delete(":id")
  DeleteToDo (@Param('id') id:number):any{
return this.todoservise.DeleteToDo(id)
  }


}
