import { Component } from '@angular/core';

import { Ticket } from '../../../../models/ticket';

import { LotteryService } from '../../../../services/lottery/lottery.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html'
})
export class BallSelectorComponent {

  constructor(private lotteryService: LotteryService) { }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }

  /**
   * Add a ball to the current ticket if it has less than 10 balls
   * @param {number} ball
   */
  addBall(ball: number): void {
    if(this.ticket.balls.length < 10) {
      this.lotteryService.addBall(ball);
    }
  }

}
