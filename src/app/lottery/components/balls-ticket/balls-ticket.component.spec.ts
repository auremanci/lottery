/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallsTicketComponent } from './balls-ticket.component';

describe('BallsTicketComponent', () => {
  let component: BallsTicketComponent;
  let fixture: ComponentFixture<BallsTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallsTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallsTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
