import {Component, OnInit} from 'angular2/core';
import {TodosModel} from "../models/todos.model";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";
import {FilterLinkComponent} from "../components/filter-link.component";
import {ITodo} from "../interfaces/todo.interface";
import {VisibilityFilterModel} from "../models/visibility-filter.model";
import {TodoListComponent} from "../components/todo-list.component";
import {AddTodoComponent} from "../components/add-todo.component";
import {FooterComponent} from "../components/footer.component";

@Component({
  selector: 'lls-todos-container',
  templateUrl: './app/todo/containers/todos.container.html',
  providers: [TodosModel, VisibilityFilterModel],
  directives: [FooterComponent, TodoListComponent, AddTodoComponent]
})

export class TodosContainer implements OnInit {
  private nextTodoId: number;

  constructor(public todos: TodosModel, public visibilityFilter: VisibilityFilterModel) { }

  ngOnInit() {
    this.nextTodoId = 0;
  }

  addTodo = (text: string) => this.todos.addTodo(this.nextTodoId++, text);

  toggleTodo = (id: number) => this.todos.toggleTodo(id);

  filterClick = (filter: EnumVisibilityFilter) => this.visibilityFilter.setVisibilityFilter(filter);

  getTodos(): ITodo[] {
    return this.todos.getList();
  }

  getVisibilityFilter(): EnumVisibilityFilter {
    return this.visibilityFilter.getVisibilityFilter();
  }
}
