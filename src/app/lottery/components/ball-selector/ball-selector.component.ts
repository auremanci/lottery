import { Component } from '@angular/core';

import { Ticket } from '../../models/ticket';

import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html'
})
export class BallSelectorComponent {

  constructor(private lotteryService: LotteryService) { }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }

  addBall(ball: number): void {
    if(this.ticket.balls.length < 10) {
      this.lotteryService.addBall(ball);
    }
  }

}
