import {Action, Reducer} from '@ngrx/store';


export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const counter: Reducer<any> = (state = 0, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
