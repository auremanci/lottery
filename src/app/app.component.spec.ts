import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// MODULES
import { LotteryModule } from './pages/lottery/lottery.module';

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { LotteryService } from './pages/lottery/services/lottery/lottery.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        LotteryModule
      ],
      declarations: [ AppComponent ],
      providers: [ LotteryService ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
