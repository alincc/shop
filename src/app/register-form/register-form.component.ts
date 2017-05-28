import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Validation } from '../common/validation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output()
  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  registerForm: FormGroup;
  formErrors = {
    username: '',
    email: '',
    passwords: {
      password: '',
      confirmPassword: '',
    },
  }

  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'minlength':     'Email must be at least 4 characters long.',
      'maxlength':     'Email cannot be more than 24 characters long.',
      'invalidEmailAddress': 'Please enter a valid email address',
    },
    'username': {
      'required':      'Username is required.',
      'minlength':     'Username must be at least 4 characters long.',
      'maxlength':     'Username cannot be more than 24 characters long.',
    },
    'passwords': {
      'areEqual': 'Password mismatch',
      'required': 'Password is required',
    },
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validation.emailValidator])],
      username: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24),
      ]],
      passwords: this.fb.group({
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required],
      }, { validator: this.areEqual })
    });

    this.registerForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit(): void {
    this.formSubmit.emit({
      email: this.registerForm.get('email').value,
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('passwords').get('password').value,
    });
  }

  areEqual(group: FormGroup) {
    if (!group.controls['password'].touched ||
      (group.controls['password'].value == group.controls['confirmPassword'].value)
    ) return null;

    return {
      areEqual: true
    };
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {

      // clear previous error message (if any)
      if (typeof this.formErrors[field] === 'object') {
        Object.keys(this.formErrors[field]).forEach(k => {
          this.formErrors[field][k] = '';
        });
      }
      else {
        this.formErrors[field] = '';
      }

      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {

          if (typeof this.formErrors[field] === 'object') {
            Object.keys(this.formErrors[field]).forEach(k => {
              this.formErrors[field][k] += messages[key] + ' ';
            });
          }
          else {
            this.formErrors[field] += messages[key] + ' ';
          }

        }
      }
    }
  }
}
