import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Ticket } from '../../../../models/ticket';

import { LotteryService } from '../../../../services/lottery/lottery.service';
import { LotteryFormService } from '../../services/lottery-form/lottery-form.service';

@Component({
  selector: 'app-lottery-form',
  templateUrl: './lottery-form.component.html'
})
export class LotteryFormComponent {

  lotteryForm: FormGroup;

  constructor(
    private lotteryService: LotteryService,
    private lotteryFormService : LotteryFormService
  ) {
    this.lotteryForm = lotteryFormService.lotteryForm;
  }

  get ticket(): Ticket {
    return this.lotteryService.ticket;
  }

  /**
   * @param {string} value : Form field to evaluate
   * @returns {boolean} If the field contains errors and has been touched
   */
  isInValid( value: string ): boolean | null {
    return  this.lotteryFormService.isInValid( value );
  }

  /**
   * See if the form is invalid, and if it does not call the service to save the ticket 
   * and put the price back to 5
   */
  saveTicket(): void {
    // If the form is invalid, mark all the inputs as touched so that the error messages appear
    if( this.lotteryForm.invalid ) {
      this.lotteryForm.markAllAsTouched();
      return;
    }

    this.lotteryService.saveTicket(this.lotteryForm.value.price);
  }  
}
