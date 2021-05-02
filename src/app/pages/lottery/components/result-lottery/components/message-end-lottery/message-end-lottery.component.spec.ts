/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// COMPONENTS
import { MessageEndLotteryComponent } from './message-end-lottery.component';

// SERVICE
import { LotteryFormService } from '../../../ticket/services/lottery-form/lottery-form.service';


describe('MessageEndLotteryComponent', () => {
  let component: MessageEndLotteryComponent;
  let fixture: ComponentFixture<MessageEndLotteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ MessageEndLotteryComponent ],
      providers: [ LotteryFormService ]
    })

    fixture = TestBed.createComponent(MessageEndLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('The message class will be "alert-danger" if there is no winner and "alert-success" if there is.', () => {

    let alertSuccess = fixture.debugElement.query( By.css('.alert-success') );
    let alertDanger = fixture.debugElement.query( By.css('.alert-danger') );

    expect( alertSuccess ).toBeNull();
    expect( alertDanger.nativeElement.innerHTML ).toContain( 'Sorry' );
    
    component.lottery.hasWinner = true;
    fixture.detectChanges();
    
    alertSuccess = fixture.debugElement.query( By.css('.alert-success') );
    alertDanger = fixture.debugElement.query( By.css('.alert-danger') );

    expect( alertDanger ).toBeNull();
    expect( alertSuccess.nativeElement.innerHTML ).toContain( 'Congratulations' );   

  });

});
