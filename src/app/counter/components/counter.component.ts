import {Component, OnInit, Input} from 'angular2/core';

@Component({
  selector: 'lls-counter',
  templateUrl: 'app/counter/components/counter.component.html',
  styleUrls: ['./app/counter/components/counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input('value') counter: number;
  @Input('onIncrement') onIncrement: void;
  @Input('onDecrement') onDecrement: void;

  ngOnInit() {
  }

}
