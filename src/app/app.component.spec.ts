import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterLinkStubDirective }   from '../testing/router-stubs';
import { RouterOutletStubComponent } from '../testing/router-stubs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective,
      ],
      imports: [
        ToastModule.forRoot(),
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
