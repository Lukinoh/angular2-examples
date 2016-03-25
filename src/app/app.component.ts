import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {HeroesComponent} from './heroes/components/heroes/heroes.component';
import {DashboardComponent} from './heroes/components/dashboard/dashboard.component';
import {HeroDetailComponent} from './heroes/components/hero-detail/hero-detail.component';
import {CounterContainer} from './counter/containers/counter.container';
import {counter} from './counter/reducers/counter.reducer';
import {provideStore, Middleware, usePostMiddleware} from '@ngrx/store';
import {HeroService} from './heroes/services/hero.service';

const stateLog : Middleware = state => {
  return state.do(val => {
    console.info('NEW STATE: ', val)
  });
};

@Component({
  selector: 'lls-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [HeroesComponent],
  providers: [
    provideStore({counter}, {counter: 0}),
    usePostMiddleware(stateLog),
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterContainer,
    useAsDefault: true
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
}
