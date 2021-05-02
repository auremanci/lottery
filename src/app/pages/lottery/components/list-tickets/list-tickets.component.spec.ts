/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { ListTicketsComponent } from './list-tickets.component';
import { ButtonsEndLotteryComponent } from './components/buttons-end-lottery/buttons-end-lottery.component';
import { ListComponent } from './components/list/list.component';

// SERVICE
import { LotteryFormService } from '../ticket/services/lottery-form/lottery-form.service';

describe('ListTicketsComponent', () => {
  let component: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ 
        ListTicketsComponent,
        ButtonsEndLotteryComponent,
        ListComponent
      ],
      providers: [ LotteryFormService ]
    })

    fixture = TestBed.createComponent(ListTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect( component ).toBeTruthy();
  });
});
