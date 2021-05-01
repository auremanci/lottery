import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { TicketComponent } from './ticket.component';
import { BallsTicketComponent } from './components/balls-ticket/balls-ticket.component';
import { LotteryFormComponent } from './components/lottery-form/lottery-form.component';
import { ResetTicketComponent } from './components/reset-ticket/reset-ticket.component';

// PROVIDERS
import { LotteryFormService } from './services/lottery-form/lottery-form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    TicketComponent,
    BallsTicketComponent,
    LotteryFormComponent,
    ResetTicketComponent
   ],
  exports: [ TicketComponent ],
  providers: [ LotteryFormService ]
})
export class LotteryTicketModule { }
