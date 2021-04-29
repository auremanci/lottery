import { Ticket } from './ticket';

export class Lottery {
    tickets:    Ticket[];
    winner:     Ticket;
    hasWinner:  boolean;
    prize:      number;
    finished:     boolean;

    constructor() {
        this.tickets = [];
        this.winner = new Ticket();
        this.hasWinner = false;
        this.prize = 0;
        this.finished = false;
    }
}
