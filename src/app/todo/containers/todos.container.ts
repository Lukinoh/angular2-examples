import {Component, OnInit} from 'angular2/core';
import {AddTodoComponent} from "../components/add-todo.component";
import {FooterComponent} from "../components/footer.component";
import {VisibleTodoListContainer} from "./visible-todo-list.container";

@Component({
  selector: 'lls-todos-container',
  templateUrl: './app/todo/containers/todos.container.html',
  directives: [FooterComponent, VisibleTodoListContainer, AddTodoComponent]
})

export class TodosContainer implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
