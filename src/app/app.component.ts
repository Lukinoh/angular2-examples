import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";

import {HeroService} from "./heroes/services/hero.service";
import {HeroesComponent} from "./heroes/components/heroes/heroes.component";
import {DashboardComponent} from "./heroes/components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./heroes/components/hero-detail/hero-detail.component";
import {CounterContainer} from "./counter/containers/counter.container";

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
    useAsDefault: true
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
}
