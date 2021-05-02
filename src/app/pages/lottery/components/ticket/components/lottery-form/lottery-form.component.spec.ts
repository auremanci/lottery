/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { LotteryFormComponent } from './lottery-form.component';

// SERVICE
import { LotteryFormService } from '../../services/lottery-form/lottery-form.service';

describe('LotteryFormComponent', () => {
  let component: LotteryFormComponent;
  let fixture: ComponentFixture<LotteryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports:[ ReactiveFormsModule ],
      declarations: [ LotteryFormComponent ],
      providers: [ LotteryFormService ]
    })

    fixture = TestBed.createComponent(LotteryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
