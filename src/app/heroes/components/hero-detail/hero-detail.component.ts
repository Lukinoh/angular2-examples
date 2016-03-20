import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

import {Hero} from "./../../models/hero.model";
import {HeroService} from "./../../services/hero.service";

@Component({
  selector: 'lls-hero-detail',
  templateUrl: '/app/heroes/components/hero-detail/hero-detail.component.html',
  styleUrls: ['./app/heroes/components/hero-detail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input('hero') hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}
