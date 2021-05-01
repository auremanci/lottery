/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LotteryFormService } from './lottery-form.service';

describe('Service: LotteryForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LotteryFormService]
    });
  });

  it('should ...', inject([LotteryFormService], (service: LotteryFormService) => {
    expect(service).toBeTruthy();
  }));
});
