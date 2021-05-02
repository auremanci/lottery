/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// COMPONENTS
import { TicketComponent } from './ticket.component';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { BallsTicketComponent } from './components/balls-ticket/balls-ticket.component';
import { LotteryFormComponent } from './components/lottery-form/lottery-form.component';
import { ResetTicketComponent } from './components/reset-ticket/reset-ticket.component';

// SERVICE
import { LotteryFormService } from '../ticket/services/lottery-form/lottery-form.service';
import { LotteryService } from '../../services/lottery/lottery.service';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  let lotteryService: LotteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ 
        TicketComponent,
        BallSelectorComponent,
        BallsTicketComponent,
        LotteryFormComponent,
        ResetTicketComponent
      ],
      providers: [ 
        LotteryFormService,
        { provide: LotteryService }
      ]
    })

    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    lotteryService = TestBed.inject(LotteryService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Don't show the message if there are 10 balls on the ticket", () => {

    let badge = fixture.debugElement.query( By.css('.bg-info') ).nativeElement;
    expect( badge ).toBeTruthy();
    
    for (let i = 0; i < 10; i++) {
      lotteryService.addBall(i);
    }
    
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      let badge = fixture.debugElement.query( By.css('.bg-info') );
      expect( badge ).toBeNull();
    });
    
  });
  
});
