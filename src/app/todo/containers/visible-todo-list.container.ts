import {Component, OnInit} from 'angular2/core';
import {TodosModel} from "../models/todos.model";
import {VisibilityFilterModel} from "../models/visibility-filter.model";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";
import {TodoListComponent} from "../components/todo-list.component";

@Component({
  selector: 'lls-visible-todo-list-container',
  templateUrl: './app/todo/containers/visible-todo-list.container.html',
  providers: [TodosModel, VisibilityFilterModel],
  directives: [TodoListComponent]
})

export class VisibleTodoListContainer implements OnInit {

  constructor(private todos: TodosModel, private visibilityFilter: VisibilityFilterModel) { }

  ngOnInit() {
  }

  toggleTodo = (id: number) => this.todos.toggleTodo(id);

  getVisibleTodos() {
    switch (this.visibilityFilter.getVisibilityFilter()) {
      case EnumVisibilityFilter.SHOW_ALL:
        return this.todos.getList();
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return this.todos.getList().filter(
          t => t.completed
        );
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return this.todos.getList().filter(
          t => !t.completed
        );
    }
  }
}
