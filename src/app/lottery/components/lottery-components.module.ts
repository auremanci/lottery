import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { BallsTicketComponent } from './balls-ticket/balls-ticket.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { LotteryFormComponent } from './lottery-form/lottery-form.component';
import { ResultLotteryComponent } from './result-lottery/result-lottery.component';

// MODULES
const modules: (any[] | Type<any> | ModuleWithProviders<{}>)[] = [
  ReactiveFormsModule
]

const components: (any[] | Type<any>)[] = [
  BallSelectorComponent,
  BallsTicketComponent,
  BetSlipComponent,
  ListTicketsComponent,
  LotteryFormComponent,
  ResultLotteryComponent
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  declarations: [ components ],
  exports: [ components ]
})
export class LotteryComponentsModule { }
