import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { NumbersComponent } from './numbers.component';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ 
    NumbersComponent,
    BallSelectorComponent
   ],
  exports: [ NumbersComponent ]
})
export class LotteryNumbersModule { }
