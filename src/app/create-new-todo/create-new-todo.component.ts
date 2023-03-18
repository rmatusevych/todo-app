import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-todo',
  templateUrl: './create-new-todo.component.html',
  styleUrls: ['./create-new-todo.component.scss']
})
export class CreateNewTodoComponent implements OnInit {
  @Input('todos') todos;

  constructor() { }

  public name = '';

  ngOnInit(): void {
  }

  create() {
    this.todos.push(this.name);
    console.log(this.todos)
    this.name = '';
  }
}
