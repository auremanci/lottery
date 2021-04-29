import { Component } from '@angular/core';

import { Ticket } from '../../models/ticket';

import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-balls-ticket',
  templateUrl: './balls-ticket.component.html'
})
export class BallsTicketComponent {

  constructor(private lotteryService: LotteryService) { }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }

  resetTicket(): void {
    this.lotteryService.resetTicket();
  }

}
