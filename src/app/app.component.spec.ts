import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/router-stubs';
import { AuthService } from './services';
import { AuthServiceMock } from '../testing/AuthServiceMock';

describe('AppComponent', () => {
  let app;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective,
      ],
      imports: [
        HttpModule,
        ToastModule.forRoot(),
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
      ]
    });

    TestBed.overrideComponent(AppComponent, {
      set: {
        template: `Overriden AppComponent`,
      },
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
});
