import { Injectable } from '@angular/core';
import { Lottery } from '../models/lottery';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  ticket: Ticket;
  lotery: Lottery;
  
  constructor() {
    this.ticket = new Ticket();
    this.lotery = new Lottery();
  }

  addBall(ball: number): void {
    this.ticket.balls.push(ball);
  }

  resetTicket(): void {
    this.ticket = new Ticket();
  }

  save(price: number): void {
    this.ticket.price = price;
    this.lotery.tickets.push(this.ticket);
    this.resetTicket();
  }

  placeBet(): void {

    for (let i = 0; i < 10; i++) {
      this.lotery.winningNumber.push(this.getRandomInt(0,9));
    }
    
    this.lotery.finished = true;
    const winner = this.winner();

    if(winner !== undefined) {
      this.lotery.hasWinner = true;
      this.lotery.prize = winner.price * 1.5;
    }

  }

  winner(): Ticket | undefined {
    return this.lotery.tickets.find((ticket) => JSON.stringify(ticket.balls) === JSON.stringify(this.lotery.winningNumber));
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  resetLottery(): void {
    this.lotery = new Lottery();
  }

}
