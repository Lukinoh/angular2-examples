import {Component, OnInit, Input} from 'angular2/core';
import {FilterLinkComponent} from "./filter-link.component";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-footer',
  templateUrl: './app/todo/components/footer.component.html',
  directives: [FilterLinkComponent]
})

export class FooterComponent implements OnInit {

  @Input('visibilityFilter') visibilityFilter: EnumVisibilityFilter;
  @Input('onFilterClick') onFilterClick: (filter: EnumVisibilityFilter) => void;

  public enumVisibilityFilter;

  constructor() { }

  ngOnInit() {
    this.enumVisibilityFilter = EnumVisibilityFilter; // I have to do this to have access to the enum in the template
  }

}
