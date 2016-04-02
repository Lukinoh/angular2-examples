import {Component, OnInit} from 'angular2/core';
import {FilterLinkContainer} from "./../containers/filter-link.container";
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-footer',
  templateUrl: './app/todo/components/footer.component.html',
  directives: [FilterLinkContainer]
})

export class FooterComponent implements OnInit {

  public enumVisibilityFilter;

  constructor() { }

  ngOnInit() {
    this.enumVisibilityFilter = EnumVisibilityFilter; // I have to do this to have access to the enum in the template
  }

}
