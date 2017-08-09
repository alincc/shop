import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Authenticate } from '../../user';
import * as fromAuth from '../../reducers';
import * as Auth from '../../actions/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    email: "",
    password: "",
  };

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
  }

  onSubmit(): void {
    const authenticate: Authenticate = {
      username: this.loginForm.email,
      password: this.loginForm.password,
    };

    this.store.dispatch(new Auth.Login(authenticate));
  }
}
