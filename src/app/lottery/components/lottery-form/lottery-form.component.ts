import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Ticket } from '../../models/ticket';

import { LotteryService } from '../../services/lottery.service';

@Component({
  selector: 'app-lottery-form',
  templateUrl: './lottery-form.component.html'
})
export class LotteryFormComponent {

  constructor(
    private lotteryService: LotteryService,
    private fb: FormBuilder
  ) { }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }

  lotteryForm: FormGroup = this.fb.group({
    price: [ 
                5, 
                [
                  Validators.required,
                  Validators.min(5)
                ] 
              ]
  });

  isValid( value: string ): boolean | null {
    return  this.lotteryForm.controls[value].errors && 
            this.lotteryForm.controls[value].touched;
  }

  save(): void {
    if( this.lotteryForm.invalid ) {
      this.lotteryForm.markAllAsTouched();
      return;
    }

    this.lotteryService.save(this.lotteryForm.value.price);
  }  
}
