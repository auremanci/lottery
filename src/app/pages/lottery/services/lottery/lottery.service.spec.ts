import { TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// SERVICES
import { LotteryFormService } from '../../components/ticket/services/lottery-form/lottery-form.service';
import { LotteryService } from './lottery.service';
import { Ticket } from '../../models/ticket';
import { Prize } from '../../models/prize';

describe('Service: Lottery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule
      ],
      providers: [ LotteryFormService ]
    });
  });

  it('should ...', inject([LotteryService], (service: LotteryService) => {
    expect(service).toBeTruthy();
  }));

  it('The ball is inserted into the ticket', inject([LotteryService], (service: LotteryService) => {
    
    service.addBall(5);
    expect(service.ticket.balls.length).toBe(1);
    expect(service.ticket.balls[0]).toBe(5);

  }));

  it( 'Save the new ticket in the lottery passing the price as a parameter and reset the value of the ticket', 
      inject([ LotteryService ], 
      ( service: LotteryService ) => {
    
    let balls = [ 0,1,2,3,4,5,6,7,8,9 ];
    let price = 100;
    service.ticket.balls = balls;
    service.saveTicket( price );

    expect( service.lottery.tickets.length ).toBe( 1 );
    expect( service.lottery.tickets[ 0 ].balls ).toEqual( balls );
    expect( service.lottery.tickets[ 0 ].price ).toBe( price );
    expect( service.ticket.balls.length ).toBe( 0 );
    expect( service.ticket.price ).toBe( 0 );
  }));

  it( 'Look for a ticket that has the same number combination as the lottery winner', 
      inject([ LotteryService ], 
      ( service: LotteryService ) => {
    
    let balls = [ 0,1,2,3,4,5,6,7,8,9 ];

    let ticket = new Ticket();
    ticket.balls = balls;
    ticket.price = 100;
    
    service.lottery.tickets = [ ticket ];
    service.lottery.prize.winningNumber = balls; // It's the same
    
    let winner = service.winner();
    
    expect( winner ).toBeInstanceOf( Ticket );
    expect( winner?.balls ).toBe( ticket.balls );
    expect( winner?.price ).toBe( ticket.price );
    
    service.lottery.prize.winningNumber = [ 0,1,2,3,4,5,6,7,8,8 ]; // It's not the same
    winner = service.winner();
    
    expect( typeof winner ).toBe( 'undefined' );

  }));

  it( 'Generate a random number between two numbers', 
      inject([ LotteryService ], 
      ( service: LotteryService ) => {
    
    let min = 1;
    let max = 10;
    let random = service.getRandomInt( min, max );
    
    expect( typeof random ).toBe( 'number' );
    expect( random ).toBeGreaterThanOrEqual( min );
    expect( random ).toBeLessThanOrEqual( max );

  }));

  it( 'Reset the lottery and the current ticket', 
      inject([ LotteryService ], 
      ( service: LotteryService ) => {
    
    let ticket = new Ticket();
    ticket.price = 100;
    ticket.balls = [ 0,1,2,3,4,5,6,7,8,9 ];

    let prize = new Prize();
    prize.prize = 200;
    prize.winningNumber = [ 9,8,7,6,5,4,3,2,1,0 ];

    let finished = true;
    let tickets = [ ticket, ticket ];
    let hasWinner = true;
    
    service.ticket = ticket;
    service.lottery.finished = finished;
    service.lottery.hasWinner = hasWinner;
    service.lottery.prize = prize;
    service.lottery.tickets = tickets;
    
    service.resetLottery();
    
    expect( service.ticket.balls.length ).toBe( 0 );
    expect( service.ticket.price ).toBe( 0 );
    
    expect( service.lottery.prize.prize ).toBe( 0 );
    expect( service.lottery.prize.winningNumber.length ).toBe( 0 );
    expect( service.lottery.tickets.length ).toBe( 0 );

  }));

  it( 'Lottery ends', 
      inject([ LotteryService ], 
      ( service: LotteryService ) => {
    
    let ticket = new Ticket();
    ticket.price = 100;
    ticket.balls = [ 0,1,2,3,4,5,6,7,8,9 ];

    let tickets = [ ticket, ticket ];

    service.lottery.tickets = tickets;
    
    service.placeBet();

    expect( service.lottery.prize.winningNumber.length ).toBe( 10 );
    expect( service.lottery.finished ).toBeTrue();

    const winner = service.winner();
    
    if( winner !== undefined ) {

      expect( service.lottery.hasWinner ).toBeTrue();
      expect( service.lottery.prize.prize ).toBe( winner.price * 1.5 );
      
    } else {

      expect( service.lottery.hasWinner ).toBeFalse();

    }

  }));

});
