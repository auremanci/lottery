import { Component } from '@angular/core';

import { Lottery } from '../../models/lottery';

import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-result-lottery',
  templateUrl: './result-lottery.component.html'
})
export class ResultLotteryComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lotery;
  }

}
