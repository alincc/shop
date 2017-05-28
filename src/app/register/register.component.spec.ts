import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
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
    component.onSubmit();
    expect(component.submitted).toBe(true);
  });
});
