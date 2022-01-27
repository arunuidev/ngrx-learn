import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
 import { FormsModule } from '@angular/forms';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
