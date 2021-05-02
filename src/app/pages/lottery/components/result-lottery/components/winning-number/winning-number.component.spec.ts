/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// COMPONENTS
import { WinningNumberComponent } from './winning-number.component';

// SERVICE
import { LotteryFormService } from '../../../ticket/services/lottery-form/lottery-form.service';
import { LotteryService } from '../../../../services/lottery/lottery.service';

describe('WinningNumberComponent', () => {
  let component: WinningNumberComponent;
  let fixture: ComponentFixture<WinningNumberComponent>;

  let lotteryService: LotteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports:[ ReactiveFormsModule ],
      declarations: [ WinningNumberComponent ],
      providers: [ 
        LotteryFormService,
        { provide: LotteryService }
      ]
    });

    fixture = TestBed.createComponent(WinningNumberComponent);
    component = fixture.componentInstance;
    lotteryService = TestBed.inject(LotteryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The winning lottery number will be displayed on the badges', () => {
    
    lotteryService.placeBet();
    fixture.detectChanges();
    
    const badges = fixture.debugElement.queryAll( By.css('.rounded-pill') );

    expect(badges.length).toBe(10);
    
    badges.forEach( ( value: DebugElement, i: number ) => {
      expect( value.nativeElement.innerHTML ).toContain(`${component.lottery.prize.winningNumber[i]}`);
    });

  });

});
