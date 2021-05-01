export class Ticket {
    private _balls: number[];
    private _price: number;

    constructor() {
        this._balls = [];
        this._price = 0;
    }

    get balls(): number[] {
        return this._balls;
    }

    set balls(balls: number[] ) {
        this._balls = balls;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number ) {
        this._price = price;
    }
}
