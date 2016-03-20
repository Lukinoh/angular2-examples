import {Component, OnInit} from "angular2/core";
import {provideStore, Store, Middleware, usePreMiddleware, usePostMiddleware} from "@ngrx/store";
import {counter, INCREMENT, DECREMENT} from "./counter";
import {Observable} from "rxjs/Observable";

const stateLog : Middleware = state => {
  return state.do(val => {
    console.info('NEW STATE: ', val)
  });
};


@Component({
  selector: 'lls-counter',
  templateUrl: 'app/counter/counter.component.html',
  styleUrls: ['./app/counter/counter.component.css'],
  providers: [
    provideStore({counter}, {counter: 0}),
    usePostMiddleware(stateLog)]
})
export class CounterComponent implements OnInit {
  counter: Observable<number>;

  constructor(private _store: Store<any>) {
  }

  ngOnInit() {
    this.counter = this._store.select('counter');
  }

  onIncrement() {
    this._store.dispatch({type: INCREMENT});
  }

  onDecrement() {
    this._store.dispatch({type: DECREMENT});
  }
}
