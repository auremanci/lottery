import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { LotteryComponentsModule } from './components/lottery-components.module';

// COMPONENTS
import { LotteryComponent } from './lottery-page/lottery.component';

@NgModule({
  imports: [
    CommonModule, 
    LotteryComponentsModule
  ],
  declarations: [ LotteryComponent ],
  exports:[ LotteryComponent ]
})
export class LotteryModule { }
