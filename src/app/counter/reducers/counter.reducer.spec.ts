import {it} from "angular2/testing";

import {counter, INCREMENT, DECREMENT} from "./counter.reducer";

describe('counter', () => {

  it('should be incremented from 0 to 1', () => {
    expect(counter(0, { type: INCREMENT })).toEqual(1);
  });

  it('should be incremented from 1 to 2', () => {
    expect(counter(1, { type: INCREMENT })).toEqual(2);
  });

  it('should be incremented from 2 to 1', () => {
    expect(counter(2, { type: DECREMENT })).toEqual(1);
  });

  it('should be incremented from 1 to 0', () => {
    expect(counter(1, { type: DECREMENT })).toEqual(0);
  });

  it('should return the default state (0) when current state is undefined', () => {
    expect(counter(undefined, { type: '' })).toEqual(0);
  });

  it('should return the current state when the action does not exists', () => {
    expect(counter(2, { type: 'SOMETHING_ELSE' })).toEqual(2);
  });

});
