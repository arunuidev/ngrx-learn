import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  //  @Input() countData:any;
  counter: number = 0;
  constructor(private store: Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((res)=>{
      this.counter = res.counter;
    })
  }

}
