import {Component, OnInit, Input} from 'angular2/core';
import {TodoComponent} from "./todo.component";
import {ITodo} from "../interfaces/todo.interface";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-todo-list',
  templateUrl: './app/todo/components/todo-list.component.html',
  directives: [TodoComponent]
})

export class TodoListComponent implements OnInit {

  @Input('todos') todos: ITodo[];
  @Input('onTodoClick') onTodoClickI: (id: number) => (void);
  @Input('visibilityFilter') visibilityFilter: EnumVisibilityFilter;

  constructor() { }

  ngOnInit() { }

  getVisibleTodos() {
    switch (this.visibilityFilter) {
      case EnumVisibilityFilter.SHOW_ALL:
        return this.todos;
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return this.todos.filter(
          t => t.completed
        );
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return this.todos.filter(
          t => !t.completed
        );
    }
  }

  onTodoClick(id: number) {
    return () => this.onTodoClickI(id);
  }
}
