import {it} from 'angular2/testing';

import {ADD_TODO, todos, TOGGLE_TODO} from './todos.reducer';
import deepFreeze = require('deep-freeze');

describe('todos', () => {

  it('should add a todo to the state', () => {
    const stateBefore = [];
    const action = {
      type: ADD_TODO,
      payload: {
        id: 0,
        text: 'Learn Redux'
      },
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('should toggle a todo from the state', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false
      }
    ];
    const action = {
      type: TOGGLE_TODO,
      payload: {
        id: 1
      },
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter);
  });
});
