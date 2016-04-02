import {Component, OnInit, Input} from 'angular2/core';
import {LinkComponent} from "../components/link.component";
import {VisibilityFilterModel} from "../models/visibility-filter.model";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-filter-link-container',
  templateUrl: './app/todo/containers/filter-link.container.html',
  providers: [VisibilityFilterModel],
  directives: [LinkComponent]
})

export class FilterLinkContainer implements OnInit {

  @Input('filter') filter: EnumVisibilityFilter;
  @Input('content') content: string;

  constructor(public visibilityFilter: VisibilityFilterModel) { }

  ngOnInit() {
  }

  filterClick = () => {
    this.visibilityFilter.setVisibilityFilter(this.filter);
  };

  getVisibilityFilter(): EnumVisibilityFilter {
    return this.visibilityFilter.getVisibilityFilter();
  }
}
