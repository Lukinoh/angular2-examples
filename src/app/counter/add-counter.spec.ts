import {it} from 'angular2/testing';

import {addCounter, removeCounter, incrementCounter} from './add-counter';
import deepFreeze = require('deep-freeze');

describe('addCounter', () => {

  it('should add a counter', () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(addCounter(listBefore)).toEqual(listAfter);
  });

  it('should remove a counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
  });

  it('should increment a counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
  });

});
