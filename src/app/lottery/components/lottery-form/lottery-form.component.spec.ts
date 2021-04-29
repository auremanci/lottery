/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LotteryFormComponent } from './lottery-form.component';

describe('LotteryFormComponent', () => {
  let component: LotteryFormComponent;
  let fixture: ComponentFixture<LotteryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
