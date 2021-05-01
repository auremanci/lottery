import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { LotteryComponentsModule } from './components/lottery-components.module';

// COMPONENTS
import { LotteryComponent } from './lottery-page/lottery.component';

// SERVICES
import { LotteryService } from './services/lottery/lottery.service';

@NgModule({
  imports: [
    CommonModule, 
    LotteryComponentsModule
  ],
  declarations: [ LotteryComponent ],
  exports:[ LotteryComponent ],
  providers: [ LotteryService ]
})
export class LotteryModule { }
