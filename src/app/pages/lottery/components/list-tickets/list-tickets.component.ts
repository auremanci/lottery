import { Component } from '@angular/core';

import { Lottery } from '../../models/lottery';

import { LotteryService } from '../../services/lottery/lottery.service';



@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html'
})
export class ListTicketsComponent {

  constructor(private lotteryService: LotteryService) { }

  get lottery(): Lottery {
    return this.lotteryService.lottery;
  }

}
