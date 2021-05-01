import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ResultLotteryComponent } from './result-lottery.component';
import { WinningNumberComponent } from './components/winning-number/winning-number.component';
import { MessageEndLotteryComponent } from './components/message-end-lottery/message-end-lottery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    ResultLotteryComponent,
    WinningNumberComponent,
    MessageEndLotteryComponent
   ],
  exports: [ ResultLotteryComponent ]
})
export class LotteryResultLotteryModule { }
