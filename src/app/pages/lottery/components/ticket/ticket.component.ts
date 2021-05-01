import { Component } from '@angular/core';

import { Ticket } from '../../models/ticket';

import { LotteryService } from '../../services/lottery/lottery.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html'
})
export class TicketComponent {

  constructor(private lotteryService: LotteryService) { }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }
}
