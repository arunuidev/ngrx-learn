import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  //  @Input() countData:any;
   counter$: Observable<{counter:number}> | undefined;
  counterSubcription: Subscription | undefined;

  constructor(private store: Store<{counter:counterState}>) { }

  ngOnInit(): void {
    
    this.counter$ = this.store.select('counter');
  }
}
   
