import { Ticket } from './ticket';
import { Prize } from './prize';

export class Lottery {
    private _tickets:   Ticket[];
    private _prize:     Prize;
    private _hasWinner: boolean;
    private _finished:  boolean;

    constructor() {
        this._tickets = [];
        this._prize = new Prize();
        this._hasWinner = false;
        this._finished = false;
    }

    get tickets(): Ticket[] {
        return this._tickets;
    }

    set tickets(tickets: Ticket[]) {
        this._tickets = tickets;
    }

    get prize(): Prize {
        return this._prize;
    }

    set prize(tickets: Prize) {
        this._prize = tickets;
    }

    get hasWinner(): boolean {
        return this._hasWinner;
    }

    set hasWinner(hasWinner: boolean) {
        this._hasWinner = hasWinner;
    }

    get finished(): boolean {
        return this._finished;
    }

    set finished(finished:boolean) {
        this._finished = finished;
    }
}
