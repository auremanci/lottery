/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// COMPONENTS
import { BallsTicketComponent } from './balls-ticket.component';

// SERVICE
import { LotteryFormService } from '../../services/lottery-form/lottery-form.service';
import { LotteryService } from '../../../../services/lottery/lottery.service';

describe('BallsTicketComponent', () => {
  let component: BallsTicketComponent;
  let fixture: ComponentFixture<BallsTicketComponent>;

  let lotteryService: LotteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ BallsTicketComponent ],
      providers: [ 
        LotteryFormService,
        { provide: LotteryService }
      ]
    })

    fixture = TestBed.createComponent(BallsTicketComponent);
    component = fixture.componentInstance;
    lotteryService = TestBed.inject(LotteryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should show the list of balls on the badges.', async() => {

    // List of balls inserted in the ticket
    const withNumber = fixture.debugElement.queryAll( By.css('.bg-primary') );
    // Empty holes in the ticket balls
    const withoutNumber = fixture.debugElement.queryAll( By.css('.bg-secondary') );
    
    expect( withNumber.length ).toBe( 0 );
    expect( withoutNumber.length ).toBe( 10 - withNumber.length );

    for (let i = 0; i < 8; i++) {
      lotteryService.addBall(i);
    }
    
    fixture.detectChanges();

    fixture.whenStable().then( () => {

      // List of balls inserted in the ticket
      const withNumber = fixture.debugElement.queryAll( By.css('.bg-primary') );
      // Empty holes in the ticket balls
      const withoutNumber = fixture.debugElement.queryAll( By.css('.bg-secondary') );

      expect( withNumber.length ).toBe( 8 );
      expect( withoutNumber.length ).toBe( 10 - withNumber.length );

      withNumber.forEach( ( value: DebugElement, i: number ) => {
        expect( value.nativeElement.innerHTML ).toContain(`${i}`);
      });

      withoutNumber.forEach( ( value: DebugElement ) => {
        expect( value.nativeElement.innerHTML ).toContain('&nbsp;');
      });

    });


  });
  
});
