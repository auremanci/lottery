import { Component } from '@angular/core';

import { Lottery } from '../../../../models/lottery';

import { LotteryService } from '../../../../services/lottery/lottery.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lotery;
  }

}
