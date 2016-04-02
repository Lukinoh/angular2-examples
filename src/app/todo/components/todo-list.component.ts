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
  
  onTodoClick(id: number) {
    return () => this.onTodoClickI(id);
  }
}
