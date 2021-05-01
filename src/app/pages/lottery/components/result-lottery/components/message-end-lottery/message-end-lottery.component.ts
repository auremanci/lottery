import { Component } from '@angular/core';

import { Lottery } from 'src/app/pages/lottery/models/lottery';

import { LotteryService } from 'src/app/pages/lottery/services/lottery/lottery.service';

@Component({
  selector: 'app-message-end-lottery',
  templateUrl: './message-end-lottery.component.html'
})
export class MessageEndLotteryComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lotery;
  }

}
