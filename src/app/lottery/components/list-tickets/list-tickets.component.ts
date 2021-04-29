import { Component } from '@angular/core';

import { Lottery } from '../../models/lottery';

import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html'
})
export class ListTicketsComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lotery;
  }

  placeBet(): void {
    this.lotteryService.placeBet();
  }

  resetLottery(): void {
    this.lotteryService.resetLottery();
  }

}
