import { Injectable } from '@angular/core';

import { LotteryFormService } from '../../components/ticket/services/lottery-form/lottery-form.service';

import { Lottery } from '../../models/lottery';
import { Ticket } from '../../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  ticket: Ticket;
  lottery: Lottery;
  
  constructor(private lotteryFormService: LotteryFormService) {
    this.ticket = new Ticket();
    this.lottery = new Lottery();
  }

  /**
   * Add a ball to the current ticket
   * @param {number} ball
   */
  addBall(ball: number): void {
    this.ticket.balls.push(ball);
  }

  /**
   * Reset the ticket and set the default values to the form
   */
  resetTicket(): void {
    this.ticket = new Ticket();
    this.lotteryFormService.setDefaultValue();
  }

  /**
   * Save the ticket with the indicated price and reset the ticket
   * @param {number} price 
   */
  saveTicket( price: number ): void {
    this.ticket.price = price;
    this.lottery.tickets.push( this.ticket );
    this.resetTicket();
  }

  /**
   * Finalize the lottery with the following steps:
   * - Create a random lottery winning number.
   * - See if there is a ticket that has the same combination of numbers as the random one.
   * - Insert the values depending on whether there is a winner or not.
   */
  placeBet(): void {

    for ( let i = 0; i < 10; i++ ) {
      this.lottery.prize.winningNumber.push( this.getRandomInt( 0,9 ) );
    }
    
    this.lottery.finished = true;
    const winner = this.winner();

    if( winner !== undefined ) {
      this.lottery.hasWinner = true;
      this.lottery.prize.prize = winner.price * 1.5;
    }

  }

  /**
   * Look for a ticket that has the same number combination as the lottery winner.
   * @returns {Ticket | undefined}: If he finds a winner, he returns the ticket and if not, indefinite
   */
  winner(): Ticket | undefined {
    return this.lottery.tickets.find(( ticket ) => JSON.stringify( ticket.balls ) === JSON.stringify( this.lottery.prize.winningNumber ) );
  }

  /**
   * @param {number} min 
   * @param {number} max 
   * @returns {number}: Random number between a maximum number and a minimum number
   */
  getRandomInt( min: number, max: number ): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Reset the lottery and the current ticket
   */
  resetLottery(): void {
    this.lottery = new Lottery();
    this.resetTicket();
  }

}
