import {Component, OnInit} from 'angular2/core';
import {TodosModel} from "../models/todos.model";

@Component({
  selector: 'lls-add-todo',
  templateUrl: './app/todo/components/add-todo.component.html',
  providers: [TodosModel]
})

export class AddTodoComponent implements OnInit {

  constructor(public todos: TodosModel) { }

  ngOnInit() { }

  onAddClick(input: HTMLInputElement) {
    this.todos.addTodo(input.value);
    input.value = '';
  }
}
