import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { LotteryComponentsModule } from './components/lottery-components.module';

// COMPONENTS
import { LotteryComponent } from './lottery-page/lottery.component';

// SERVICES
import { LotteryService } from './services/lottery.service';

const modules: (any[] | Type<any> | ModuleWithProviders<{}>)[] = [
  LotteryComponentsModule
]

const components: (any[] | Type<any>)[] = [
  LotteryComponent
];

const providers: Provider[] = [
  LotteryService
]

@NgModule({
  imports: [
    CommonModule, 
    modules
  ],
  declarations: [components],
  exports:[components],
  providers: [providers]
})
export class LotteryModule { }
