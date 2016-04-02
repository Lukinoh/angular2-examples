import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'lls-todo',
  templateUrl: './app/todo/components/todo.component.html',
  directives: [TodoComponent]
})

export class TodoComponent implements OnInit {

  @Input('onClick') onClick: () => void;
  @Input('text') text: string;
  @Input('completed') completed: boolean;

  constructor() { }

  ngOnInit() { }

}
