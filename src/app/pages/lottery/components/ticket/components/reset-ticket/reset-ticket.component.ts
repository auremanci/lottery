import { Component } from '@angular/core';

import { Ticket } from 'src/app/pages/lottery/models/ticket';

import { LotteryService } from 'src/app/pages/lottery/services/lottery/lottery.service';

@Component({
  selector: 'app-reset-ticket',
  templateUrl: './reset-ticket.component.html'
})
export class ResetTicketComponent {

  constructor(private lotteryService: LotteryService) { }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }

  /**
   * Method that resets the ticket
   */
  resetTicket(): void {
    this.lotteryService.resetTicket();
  }



}
