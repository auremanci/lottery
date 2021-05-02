/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { ResultLotteryComponent } from './result-lottery.component';
import { MessageEndLotteryComponent } from './components/message-end-lottery/message-end-lottery.component';
import { WinningNumberComponent } from './components/winning-number/winning-number.component';

// SERVICE
import { LotteryFormService } from '../ticket/services/lottery-form/lottery-form.service';


describe('ResultLotteryComponent', () => {
  let component: ResultLotteryComponent;
  let fixture: ComponentFixture<ResultLotteryComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ 
        ResultLotteryComponent,
        MessageEndLotteryComponent,
        WinningNumberComponent
      ],
      providers: [ LotteryFormService ]
    })

    fixture = TestBed.createComponent(ResultLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
