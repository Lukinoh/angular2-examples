import {Component, OnInit, Input} from 'angular2/core';
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-filter-link',
  templateUrl: './app/todo/components/filter-link.component.html',
})

export class FilterLinkComponent implements OnInit {
  // Cannot use ng-content for the content because of : https://github.com/angular/angular/issues/6576
  @Input('content') content: string;
  @Input('filter') filter: EnumVisibilityFilter;
  @Input('currentFilter') currentFilter: EnumVisibilityFilter;
  @Input('onClick') onClick: (filter: EnumVisibilityFilter) => void;

  constructor() { }

  ngOnInit() { }

  changeVisibility(e: Event) {
    e.preventDefault();
    this.onClick(this.filter);
  }

}
