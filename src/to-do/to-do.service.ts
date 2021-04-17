import { Injectable } from '@nestjs/common';
import { todo } from './interface/to-do.interface';
@Injectable()
export class ToDoService {
  todos: todo[] = [
    {
      id: 1,
      titre: 'test1',
      description: 'test 1',
    },
    {
      id: 2,
      titre: 'test2',
      description: 'test 2',
    },
    {
      id: 3,
      titre: 'test3',
      description: 'test 3',
      done: true,
    },
  ];
  findAll(): todo[] {
    return this.todos;
  }

  createToDo(newToDo: any): any {
    this.todos = [...this.todos, newToDo];
  }

  findById(id: number): any {
    return this.todos.find((todo) => todo.id == id);
  }

  updateToDO(id: number, patch: any) {
    const toDoUpdate = this.todos.find((todo) => todo.id == id);
    if (patch.hasOwnProperty('done')) {
      toDoUpdate.done = patch.done;
    }
    if (patch.hasOwnProperty('titre')) {
      toDoUpdate.titre = patch.titre;
    }
    if (patch.hasOwnProperty('desciption')) {
      toDoUpdate.description = patch.description;
    }
  }

  DeleteToDo(id:number){
const nbToDos = this.todos.length;
this.todos =[...this.todos.filter(t=>t.id !== +id)]
return(this.todos)
  }
}
