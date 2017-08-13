import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../reducers';
import * as authActions from '../actions/auth';
import { User, ShippingStatus } from '../../model/interface';
import { Order } from '../../order/order';

@Component({
  selector: 'app-profile',
  template: `
    <app-profile-details
      [user]="user$ | async"
      [orders]="orders$ | async"
      (logout)="logout($event)">
    </app-profile-details>
  `,
})
export class ProfileComponent implements OnInit {
  isFinished: boolean = false;
  user: User
  user$: Observable<any>;
  orders$: Observable<Order[]>;
  private ShippingStatus: typeof ShippingStatus = ShippingStatus;

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.user$ = this.store.select(fromAuth.getUser);
    this.orders$ = this.store.select(fromAuth.getUserOrders);
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }

}
