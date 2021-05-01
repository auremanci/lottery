export class Prize {
    private _winningNumber:  number[];
    private _prize:          number;

    constructor() {
        this._winningNumber = [];
        this._prize = 0;
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
}
