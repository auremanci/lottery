import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// COMPONENTS
import { ButtonsEndLotteryComponent } from './buttons-end-lottery.component';

// SERVICE
import { LotteryFormService } from '../../../ticket/services/lottery-form/lottery-form.service';
import { LotteryService } from '../../../../services/lottery/lottery.service';


describe('ButtonsEndLotteryComponent', () => {
  let component: ButtonsEndLotteryComponent;
  let fixture: ComponentFixture<ButtonsEndLotteryComponent>;

  let lotteryService: LotteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ ButtonsEndLotteryComponent ],
      providers: [ 
        LotteryFormService,
        { provide: LotteryService }
      ]
    })

    fixture = TestBed.createComponent(ButtonsEndLotteryComponent);
    component = fixture.componentInstance;
    lotteryService = TestBed.inject(LotteryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Contains "Place bet" button and "Reset lottery" button', () => {

    let placeBet = fixture.debugElement.query( By.css('.btn-primary') );
    let resetLottery = fixture.debugElement.query( By.css('.btn-danger') );

    expect( placeBet.nativeElement.innerHTML ).toBeTruthy();
    expect( resetLottery.nativeElement.innerHTML ).toBeTruthy();

  });

  it('Clicking on the "Place bet" button creates a winning ticket', () => {

    const placeBet = fixture.debugElement.query( By.css('.btn-primary') );
    placeBet.triggerEventHandler('click', null);

    expect( component.lottery.prize.winningNumber.length ).toBe( 10 );
    expect( component.lottery.finished ).toBeTrue();

  });

  it('Clicking on the "Resset lottery" button restarts the lottery', () => {

    const resetLottery = fixture.debugElement.query( By.css('.btn-danger') );
    resetLottery.triggerEventHandler('click', null);

    expect( component.lottery.finished ).toBeFalse();
    expect( component.lottery.hasWinner ).toBeFalse( );
    expect( component.lottery.tickets.length ).toBe( 0 );
    expect( component.lottery.prize.prize ).toBe( 0 );
    expect( component.lottery.prize.winningNumber.length ).toBe( 0 );
    
  });

});
