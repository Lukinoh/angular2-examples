import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';


import {HeroesComponent} from './heroes/components/heroes/heroes.component';
import {DashboardComponent} from './heroes/components/dashboard/dashboard.component';
import {HeroDetailComponent} from './heroes/components/hero-detail/hero-detail.component';
import {HeroService} from './heroes/services/hero.service';

import {CounterContainer} from './counter/containers/counter.container';
import {TodosContainer} from "./todo/containers/todos.container";



@Component({
  selector: 'lls-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [HeroesComponent],
  providers: [
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
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosContainer
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
}
