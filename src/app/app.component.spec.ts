import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/router-stubs';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownValue } from './model/interface';
import { AuthService } from './services';
import { AuthServiceMock } from '../testing/AuthServiceMock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DropdownComponent,
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
