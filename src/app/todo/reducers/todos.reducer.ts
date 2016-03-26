import {Action, Reducer} from '@ngrx/store';
import {ITodo} from '../interfaces/todo.interface';
import {Map} from 'immutable';


export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const todo: Reducer<any> = (state: ITodo, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.payload.id) {
        return state;
      }

      // Don't work actually for the moment
      // https://github.com/Microsoft/TypeScript/issues/2103
      // return {
      //   ...state,
      //   completed: !state.completed
      // };

      return Map(state).set('completed', !state.completed).toJS();
    default:
      return state;
  }
};

export const todos: Reducer<any> = (state: ITodo[] = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map((t: ITodo) => {
        return todo(t, action);
      });
    default:
      return state;
  }
};
