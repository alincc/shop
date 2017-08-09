import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../reducers';
import * as authActions from '../actions/auth';
import { User, ShippingStatus } from '../../model/interface';

@Component({
  selector: 'app-profile',
  template: `
    <app-profile-details
      [user]="user$ | async"
      (logout)="logout($event)">
    </app-profile-details>
  `,
})
export class ProfileComponent implements OnInit {
  isFinished: boolean = false;
  user: User
  user$: Observable<any>;
  private ShippingStatus: typeof ShippingStatus = ShippingStatus;

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromAuth.getUser);
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }

}
