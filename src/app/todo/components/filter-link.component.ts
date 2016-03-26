import {Component, OnInit, Input} from 'angular2/core';
import {VisibilityFilterModel} from "../models/visibility-filter.model";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-filter-link',
  templateUrl: './app/todo/components/filter-link.component.html',
  providers: [VisibilityFilterModel]
})

export class FilterLinkComponent implements OnInit {
  // Cannot use ng-content for the content because of : https://github.com/angular/angular/issues/6576
  @Input('content') content: string;
  @Input('filter') filter: EnumVisibilityFilter;
  @Input('currentFilter') currentFilter: EnumVisibilityFilter;

  constructor(private visibilityFilter: VisibilityFilterModel) { }

  ngOnInit() { }

  changeVisibility(e: Event) {
    e.preventDefault();
    this.visibilityFilter.setVisibilityFilter(this.filter);
  }

}
