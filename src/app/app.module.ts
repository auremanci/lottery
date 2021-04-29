import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULES
import { LotteryModule } from './lottery/lottery.module';

// COMPONENTS
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LotteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
