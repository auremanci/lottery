/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultLotteryComponent } from './result-lottery.component';

describe('ResultLotteryComponent', () => {
  let component: ResultLotteryComponent;
  let fixture: ComponentFixture<ResultLotteryComponent>;

  beforeEach(waitForAsync(() => {
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

  it('should create result', () => {
    expect(component).toBeTruthy();
  });
});
