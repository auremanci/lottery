import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { LotteryNumbersModule } from './numbers/numbers.module';
import { LotteryTicketModule } from './ticket/ticket.module';
import { LotteryListTicketsModule } from './list-tickets/list-tickets.module';
import { LotteryResultLotteryModule } from './result-lottery/result-lottery.module';

const modules: (any[] | Type<any> | ModuleWithProviders<{}>)[] = [
  LotteryTicketModule,
  LotteryNumbersModule,
  LotteryListTicketsModule,
  LotteryResultLotteryModule
]

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [ 
    modules
  ]
})
export class LotteryComponentsModule { }
