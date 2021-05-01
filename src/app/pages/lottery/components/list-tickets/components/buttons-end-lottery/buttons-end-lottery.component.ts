import { Component } from '@angular/core';

import { Lottery } from '../../../../models/lottery';

import { LotteryService } from '../../../../services/lottery/lottery.service';

@Component({
  selector: 'app-buttons-end-lottery',
  templateUrl: './buttons-end-lottery.component.html'
})
export class ButtonsEndLotteryComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lotery;
  }

  /**
   * Start the christmas draw
   */
  placeBet(): void {
    this.lotteryService.placeBet();
  }

  /**
   * Restart the christmas draw
   */
  resetLottery(): void {
    this.lotteryService.resetLottery();
  }


}
