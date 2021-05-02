import { TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// SERVICES
import { LotteryFormService } from './lottery-form.service';

describe('Service: LotteryForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule
      ],
      providers: [LotteryFormService]
    });
  });

  it('should ...', inject([LotteryFormService], (service: LotteryFormService) => {
    expect(service).toBeTruthy();
  }));

  it( 'Create a form with the price field',
      inject( [ LotteryFormService ], 
      ( service: LotteryFormService ) => {

    expect( service.lotteryForm.contains('price') ).toBeTruthy();

  }));

  it( 'The price field is mandatory and must have a value greater than or equal to 5', 
      inject( [LotteryFormService], 
      ( service: LotteryFormService ) => {

    const control = service.lotteryForm.get( 'price' );

    control?.setValue('');
    expect( control?.valid ).toBeFalsy();
    
    control?.setValue(0);
    expect( control?.valid ).toBeFalsy();

    control?.setValue(5);
    expect( control?.valid ).toBeTruthy();

  }));

  it( 'Determines if the field contains errors and has been touched', 
      inject( [ LotteryFormService ], 
      ( service: LotteryFormService ) => {

    const field = 'price';

    expect( service.isInValid(field) ).toBeFalsy();
    
    const control = service.lotteryForm.get(field);
    
    control?.setValue('');
    expect( service.isInValid(field) ).toBeFalsy();
    
    control?.setValue(0);
    expect( service.isInValid(field) ).toBeFalsy();
    
    control?.markAsTouched();
    expect( service.isInValid(field) ).toBeTruthy();

    control?.setValue(5);
    expect( service.isInValid(field) ).toBeFalsy();

  }));

  it( 'Sets the default value to the price field', 
      inject( [ LotteryFormService ], 
      ( service: LotteryFormService ) => {

    const control = service.lotteryForm.get('price');
    
    control?.setValue(10);
    service.setDefaultValue();
    expect( control?.value ).toBe(5);
    
  }));

});
