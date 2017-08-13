import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '../reducers';
import * as authActions from '../actions/auth';

import { Register } from '../user';

@Component({
  selector: 'app-register-page',
  template: `
    <app-register (register)="onRegister($event)"></app-register>
  `,
})
export class RegisterPageComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {  }

  ngOnInit() {}

  onRegister(user: Register) {
    this.store.dispatch(new authActions.SignupAction(user));
  }
}
