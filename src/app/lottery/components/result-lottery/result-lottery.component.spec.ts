/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultLotteryComponent } from './result-lottery.component';

describe('ResultLotteryComponent', () => {
  let component: ResultLotteryComponent;
  let fixture: ComponentFixture<ResultLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
