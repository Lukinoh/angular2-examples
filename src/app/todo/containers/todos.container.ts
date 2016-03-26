import {Component, OnInit} from 'angular2/core';
import {TodosModel} from "../models/todos.model";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";
import {FilterLinkComponent} from "../components/filter-link.component";
import {ITodo} from "../interfaces/todo.interface";
import {VisibilityFilterModel} from "../models/visibility-filter.model";

@Component({
  selector: 'lls-todos-container',
  templateUrl: './app/todo/containers/todos.container.html',
  providers: [TodosModel, VisibilityFilterModel],
  directives: [FilterLinkComponent]
})

export class TodosContainer implements OnInit {
  private nextTodoId: number;
  public enumVisibilityFilter;

  constructor(public todos: TodosModel, public visibilityFilter: VisibilityFilterModel) { }

  ngOnInit() {
    this.nextTodoId = 0;
    this.enumVisibilityFilter = EnumVisibilityFilter; // I have to do this to have access to the enum in the template
  }

  addTodo(input: HTMLInputElement) {
    this.todos.addTodo(this.nextTodoId++, input.value);
    input.value = '';
  }

  toggleTodo(id: number) {
    this.todos.toggleTodo(id);
  }

  getTodos(): ITodo[] {
    return this.todos.getList();
  }

  getVisibilityFilter(): EnumVisibilityFilter {
    return this.visibilityFilter.getVisibilityFilter();
  }

  getVisibleTodos(todos: ITodo[], filter: EnumVisibilityFilter) {
    switch (filter) {
      case EnumVisibilityFilter.SHOW_ALL:
        return todos;
      case EnumVisibilityFilter.SHOW_COMPLETED:
        return todos.filter(
          t => t.completed
        );
      case EnumVisibilityFilter.SHOW_ACTIVE:
        return todos.filter(
          t => !t.completed
        );
    }
  }
}
