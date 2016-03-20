import {Component, OnInit} from 'angular2/core';
import {Router} from "angular2/router";

import {Hero} from "./../../models/hero.model";
import {HeroService} from "./../../services/hero.service.ts";
import {HeroDetailComponent} from "./../hero-detail/hero-detail.component.ts";

@Component({
  selector: 'lls-heroes',
  templateUrl: 'app/heroes/components/heroes/heroes.component.html',
  styleUrls: ['./app/heroes/components/heroes/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(
    private _heroService: HeroService,
    private _router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this._heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

