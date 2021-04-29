import { Injectable } from '@angular/core';
import { Lottery } from '../models/lottery';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  private _ticket: Ticket;
  private _lotery: Lottery;
  
  constructor() {
    this._ticket = new Ticket();
    this._lotery = new Lottery();
  }

  get ticket(): Ticket {
    return this._ticket;
  }

  get lotery(): Lottery {
    return this._lotery;
  }

  addBall(ball: number): void {
    this._ticket.balls.push(ball);
  }

  resetTicket(): void {
    this._ticket = new Ticket();
  }

  save(price: number): void {
    this._ticket.price = price;
    this._lotery.tickets.push(this._ticket);
    this.resetTicket();
  }

  placeBet(): void {

    for (let i = 0; i < 10; i++) {
      this._lotery.winner.balls.push(this.getRandomInt(0,9));
    }
    
    this._lotery.finished = true;
    const winner = this.winner();

    if(winner !== undefined) {
      this._lotery.hasWinner = true;
      this._lotery.winner.price = winner.price;
      this._lotery.prize = winner.price * 1.5;
    }

  }

  winner(): Ticket | undefined {
    return this._lotery.tickets.find((ticket) => JSON.stringify(ticket.balls) === JSON.stringify(this._lotery.winner.balls));
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  resetLottery(): void {
    this._lotery = new Lottery();
  }

}
