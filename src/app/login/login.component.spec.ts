import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Router, RouterStub } from '../../testing/router-stubs';
import { ToastsManagerMock } from '../../testing/ToastsManagerMock';
import { AuthService } from '../services';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        AuthService,

        { provide: Router, useClass: RouterStub },
        { provide: ToastsManager, useClass: ToastsManagerMock },
      ],
      imports: [
        HttpModule,
        FormsModule,
        ToastModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
