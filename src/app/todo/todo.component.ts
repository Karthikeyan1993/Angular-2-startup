import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  private todo: Todo = new Todo();
  private todos: Todo[] = [];
  private message: string;
  private posts = [];
  public constructor(private _TodoService: TodoService) {
  }

  ngOnInit() {
    this.message = this._TodoService.greeting();
    this._TodoService.getUsers().subscribe(data => this.posts = data);
  }
  public testFunc(): void {
    this.todo.todoId = 1;
    this.todo.isCompleted = false;
    this.todos.push(this.todo);
    console.log(JSON.stringify(this.todo));
    console.log(JSON.stringify(this.posts));
    this.clearModel();
  }
  public clearModel(): void {
    this.todo.todoName = '';
    this.todo.todoDesc = '';
  }
}
