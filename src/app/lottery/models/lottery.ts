import { Ticket } from './ticket';

export class Lottery {
    private _tickets:        Ticket[];
    private _winningNumber:  number[];
    private _prize:          number;
    private _hasWinner:      boolean;
    private _finished:       boolean;

    constructor() {
        this._tickets = [];
        this._winningNumber = [];
        this._prize = 0;
        this._hasWinner = false;
        this._finished = false;
    }

    get tickets(): Ticket[] {
        return this._tickets;
    }

    set tickets(tickets: Ticket[]) {
        this._tickets = tickets;
    }

    get winningNumber(): number[] {
        return this._winningNumber;
    }

    set winningNumber(balls: number[]) {
        this._winningNumber = balls;
    }

    get prize(): number {
        return this._prize;
    }

    set prize(prize: number) {
        this._prize = prize;
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
