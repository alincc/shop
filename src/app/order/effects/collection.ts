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

import * as collection from '../actions/collection';
// import * as threadCollection from '../../messages/actions/collection';
import { CheckoutService } from '../../services/checkout.service';

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

  constructor(
    private actions$: Actions,
    private service: CheckoutService,
  ) {}
}
