import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import * as Checkout from '../actions/checkout';
import * as Cart from '../actions/cart';
import * as Order from '../../order/actions/collection';

@Injectable()
export class CheckoutEffects {

  @Effect()
  createOrder$ = this.actions$
    .ofType(Checkout.CREATE_ORDER)
    .map((action: Checkout.CreateOrderAction) => action.payload)
    .map((createOrder) => new Order.AddOrderAction(createOrder));

  @Effect()
  createOrderSuccess$ = this.actions$
    .ofType(Checkout.CREATE_ORDER_SUCCESS)
    .map((action: Checkout.CreateOrderAction) => action.payload)
    .map((order) => new Cart.ClearAction());

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}
