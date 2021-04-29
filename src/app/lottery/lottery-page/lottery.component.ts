import { Component } from '@angular/core';

import { Lottery } from '../models/lottery';

import { LotteryService } from '../services/lottery.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html'
})
export class LotteryComponent {

  constructor(private lotterService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotterService.lotery;
  }
}
