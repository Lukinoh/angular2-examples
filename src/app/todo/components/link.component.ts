import {Component, OnInit, Input} from 'angular2/core';
import {EnumVisibilityFilter} from "../interfaces/visibility-filter.enum";

@Component({
  selector: 'lls-link',
  templateUrl: './app/todo/components/link.component.html',
})

export class LinkComponent implements OnInit {
  // Cannot use ng-content for the content because of : https://github.com/angular/angular/issues/6576
  @Input('content') content: string;
  @Input('active') active: EnumVisibilityFilter;
  @Input('onClick') onClick: () => void;

  constructor() { }

  ngOnInit() { }

  changeVisibility(e: Event) {
    e.preventDefault();
    this.onClick();
  }

}
