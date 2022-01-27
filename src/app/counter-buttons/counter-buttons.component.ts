import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment,reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  countValue = 0;

  // @Output() incrementValue = new EventEmitter()


  constructor(private stroe:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
  }

  increment(){
    // this.countValue++;
    // this.incrementValue.emit(this.countValue);
    this.stroe.dispatch(increment())
  }
  decrement()
  {
    // this.countValue = (this.countValue>0)?this.countValue-1:0;
    // this.incrementValue.emit(this.countValue);
    this.stroe.dispatch(decrement())
  }
  reset(){
    // this.countValue = 0;
    // this.incrementValue.emit(this.countValue);
    this.stroe.dispatch(reset())
  }

}
