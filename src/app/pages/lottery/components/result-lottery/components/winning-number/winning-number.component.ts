import { Component } from '@angular/core';

import { Lottery } from 'src/app/pages/lottery/models/lottery';

import { LotteryService } from 'src/app/pages/lottery/services/lottery/lottery.service';

@Component({
  selector: 'app-winning-number',
  templateUrl: './winning-number.component.html'
})
export class WinningNumberComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lottery;
  }

}
