import {Injectable} from 'angular2/core';

import {Store} from '@ngrx/store';
import {ITodo} from '../interfaces/todo.interface';

import {ADD_TODO, TOGGLE_TODO} from '../reducers/todos.reducer';

@Injectable()
export class TodosModel {

  constructor(private store: Store<any>) {
  }

  getList(): ITodo[] {
    return this.store.getState().todos;
  }

  addTodo(id: number, text: string): void {
    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        id: id,
        text: text
      }
    })
  }

  toggleTodo(id: number): void {
    this.store.dispatch({
      type: TOGGLE_TODO,
      payload: {
        id: id
      }
    })
  }

}
