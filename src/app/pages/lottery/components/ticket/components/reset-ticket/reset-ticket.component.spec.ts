/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// COMPONENTS
import { ResetTicketComponent } from './reset-ticket.component';

// SERVICE
import { LotteryFormService } from '../../services/lottery-form/lottery-form.service';


describe('ResetTicketComponent', () => {
  let component: ResetTicketComponent;
  let fixture: ComponentFixture<ResetTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ ResetTicketComponent ],
      providers: [ LotteryFormService ]
    })

    fixture = TestBed.createComponent(ResetTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When the button is clicked, the list of balls on the ticket must be cleared', () => {

    const button = fixture.debugElement.query( By.css('button') );

    button.triggerEventHandler('click', null);
    expect( component.ticket.balls.length ).toBe(0);

  });

});
