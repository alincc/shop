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
import * as entities from '../../core/actions/entities';
import { ProductService } from '../../services/product.service';
import { productSchema } from '../product';


@Injectable()
export class CollectionEffects {
  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .startWith(new collection.LoadAction())
    .switchMap(() => {
      return this.service
        .getProducts()
        .mergeMap((products: any[]) => {
          const normalized = normalize(products, new schema.Array(productSchema));

          return [
            new collection.LoadSuccessAction(normalized.result),
            new entities.LoadSuccessAction(normalized),
          ]
        })
        .catch(() => of(new collection.LoadSuccessAction([])));
    });

  constructor(
    private actions$: Actions,
    private service: ProductService,
  ) {}
}
