import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// COMPONENTS
import { BallSelectorComponent } from './ball-selector.component';

// SERVICE
import { LotteryFormService } from '../../services/lottery-form/lottery-form.service';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ BallSelectorComponent ],
      providers: [ LotteryFormService ]
    })

    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Buttons must contain 0 to 9', () => {

    const buttons = fixture.debugElement.queryAll( By.css('button') );

    expect( buttons.length ).toBe(10);
    
    buttons.forEach( ( value: DebugElement, i: number ) => {
      expect( value.nativeElement.innerHTML ).toContain(`${i}`);
    });

  });

  it('The number must be inserted into the ball list on the ticket when clicked', () => {

    const buttons = fixture.debugElement.queryAll( By.css('button') );

    buttons.forEach( ( value: DebugElement, i: number ) => {
      value.triggerEventHandler('click', null);
      expect( component.ticket.balls[i] ).toBe(i);
    });

  });

});
