/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// COMPONENTS
import { ListComponent } from './list.component';

// SERVICE
import { LotteryFormService } from '../../../ticket/services/lottery-form/lottery-form.service';
import { LotteryService } from '../../../../services/lottery/lottery.service';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let lotteryService: LotteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ ListComponent ],
      providers: [ 
        LotteryFormService,
        { provide: LotteryService }
      ]
    })

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    lotteryService = TestBed.inject(LotteryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When a new ticket is inserted it should appear in the list', () => {
    
    let tickets = fixture.debugElement.queryAll( By.css('.list-group-item') );
    expect( tickets.length ).toBe( 0 );
    
    for (let i = 0; i < 10; i++) {
      lotteryService.addBall(i);
    }

    lotteryService.saveTicket(500);
    fixture.detectChanges();
    
    fixture.whenStable().then( () => {
      
      tickets = fixture.debugElement.queryAll( By.css('.list-group-item') );
      expect( tickets.length ).toBe( 1 );

      let badges = fixture.debugElement.queryAll( By.css('.rounded-pill') );

      badges.forEach( ( value: DebugElement, i: number ) => {
        let ball = `${component.lottery.tickets[ 0 ].balls[ i ]}`;
        expect( value.nativeElement.innerHTML ).toContain( ball );
      });

      let price = fixture.debugElement.query( By.css('.display-6') );
      expect( price.nativeElement.innerHTML ).toContain( component.lottery.tickets[0].price );

    });

  });

});
