import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { normalize, schema } from 'normalizr';

import * as collection from '../actions/collection';
import * as checkoutActions from '../../checkout/actions/checkout';
import * as entitiesActions from '../../core/actions/entities';
import * as authOrderActions from '../../auth/actions/order';
import { CheckoutService } from '../../services/checkout.service';
import { orderSchema } from '../order';

@Injectable()
export class CollectionEffects {
  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  // @Effect()
  // loadCollection$: Observable<Action> = this.actions$
  //   .ofType(collection.LOAD)
  //   .startWith(new collection.LoadAction())
  //   .switchMap(() => {
  //     return this.service
  //       .()
  //       .map((orders: any[]) => {
  //         return new collection.LoadSuccessAction(orders)
  //       })
  //       .catch(() => of(new collection.LoadSuccessAction([])));
  //   });



  @Effect()
  addOrder$ = this.actions$
    .ofType(collection.ADD_ORDER)
    .map((action: collection.AddOrderAction) => action.payload)
    .switchMap((createOrder) => {
      return this.service.createOrder(createOrder)
        .map(order => new collection.AddOrderSuccessAction(order.data))
        .catch(error => of(new collection.AddOrderFailAction(error)));
    })

  @Effect()
  addOrderSuccess$ = this.actions$
    .ofType(collection.ADD_ORDER_SUCCESS)
    .map((action: collection.AddOrderSuccessAction) => action.payload)
    .mergeMap((order) => {
      const normalized = normalize(order, orderSchema);

      return [
        new checkoutActions.CreateOrderSuccessAction(order),
        new entitiesActions.LoadSuccessAction(normalized),
        new authOrderActions.AddOrderAction(order._id),
      ];
    })

  constructor(
    private actions$: Actions,
    private service: CheckoutService,
  ) {}
}
