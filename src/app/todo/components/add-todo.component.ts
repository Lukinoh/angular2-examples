import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'lls-add-todo',
  templateUrl: './app/todo/components/add-todo.component.html'
})

export class AddTodoComponent implements OnInit {

  @Input('onAddClick') onAddClickI: (text: string) => void; // I to signify that it comes from input

  constructor() { }

  ngOnInit() { }

  onAddClick(input: HTMLInputElement) {
    this.onAddClickI(input.value);
    input.value = '';
  }

}
