import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LotteryFormService {

  lotteryForm: FormGroup = this.fb.group({
    price:  [ 
              5, 
              [ Validators.required, Validators.min(5) ] 
            ]
  });

  constructor(private fb: FormBuilder) { }

  /**
   * @param {string} value : Form field to evaluate
   * @returns {boolean | null} If the field contains errors and has been touched
   */
  isInValid( value: string ): boolean | null {
    return  this.lotteryForm.controls[value].errors && 
            this.lotteryForm.controls[value].touched;
  }

  /**
   * Sets the default value to the price field
   */
  setDefaultValue(): void {
    this.lotteryForm.get('price')?.setValue(5);
  }

}
