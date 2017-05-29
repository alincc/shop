import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { AuthService } from '../services';
import { AuthServiceMock } from '../../testing/AuthServiceMock';
import { FAKE_USER1 } from '../../testing/mock/mocks';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent,
        RegisterFormComponent,
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it ('should redirect the user if already logged in', () => {
    // TODO: test
  });

  it ('should not go through if there are required fields empty', () => {
    // TODO: test
  });

  it ('should set submitted value to true after submitting', () => {
    component.handleFormSubmit(FAKE_USER1);
    expect(component.submitted).toBe(true);
  });
});
