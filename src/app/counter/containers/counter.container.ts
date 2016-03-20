import {Component, OnInit} from "angular2/core";

import {provideStore, Middleware, usePostMiddleware, Store} from '@ngrx/store';
import {counter, INCREMENT, DECREMENT} from './../reducers/counter.reducer';
import {Observable} from "rxjs/Observable";

import {CounterComponent} from "./../components/counter.component";

const stateLog : Middleware = state => {
  return state.do(val => {
    console.info('NEW STATE: ', val)
  });
};

@Component({
  selector: 'lls-counter-container',
  templateUrl: 'app/counter/containers/counter.container.html',
  styleUrls: ['./app/counter/containers/counter.container.css'],
  providers: [
    provideStore({counter}, {counter: 0}),
    usePostMiddleware(stateLog)
  ],
  directives: [CounterComponent]
})
export class CounterContainer implements OnInit {
  counter: Observable<number>;
  onIncrement = () => this.store.dispatch({type: INCREMENT});
  onDecrement = () => this.store.dispatch({type: DECREMENT});

  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.counter = this.store.select('counter');
  }
}


