import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ListTicketsComponent } from './list-tickets.component';
import { ButtonsEndLotteryComponent } from './components/buttons-end-lottery/buttons-end-lottery.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ 
    ListTicketsComponent,
    ButtonsEndLotteryComponent,
    ListComponent
  ],
  exports: [ ListTicketsComponent ]
})
export class LotteryListTicketsModule { }
