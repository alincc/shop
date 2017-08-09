import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import * as Cart from '../actions/cart';
import { CartService } from '../../services/cart.service';

@Injectable()
export class CartEffects {
  @Effect()
  loadCart$ = this.actions$
    .ofType(Cart.LOAD)
    .startWith(new Cart.LoadAction())
    .switchMap(() => {
      return of(this.cartService.getItems())
        .map(items => new Cart.LoadSuccessAction(items));
    });

  @Effect()
  addToCart$ = this.actions$
    .ofType(Cart.ADD_TO_CART)
    .map((action: Cart.AddToCartAction) => action.payload)
    .switchMap((addProduct) =>
      this.cartService.add(addProduct.product, addProduct.combination, addProduct.selectedCombination)
        .map(items => new Cart.AddToCartSuccessAction(items))
        .catch(e => of(new Cart.AddToCartFailAction(e)))
    );

  @Effect()
  removeItem$ = this.actions$
    .ofType(Cart.REMOVE_ITEM)
    .map((action: Cart.RemoveItemAction) => action.payload)
    .switchMap((line) =>
      this.cartService.delete(line)
        .map(items => new Cart.RemoveItemSuccessAction(items))
        .catch(e => of(new Cart.RemoveItemFailAction(e)))
    );

  @Effect({ dispatch: false })
  removeItemSuccess$ = this.actions$
    .ofType(Cart.REMOVE_ITEM_SUCCESS)
    .do(() => {
      this.toastr.success('Product was removed from your cart', 'Success');
    });

  @Effect({ dispatch: false })
  addToCartSuccess$ = this.actions$
    .ofType(Cart.ADD_TO_CART_SUCCESS)
    .do(() => {
      this.toastr.success('Product was added to your cart', 'Success');
    });

  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastsManager,
  ) {}
}
