import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as productActions from '../actions/product';
import * as collectionActions from '../actions/collection';
import * as cartActions from '../../checkout/actions/cart';
import { Product } from '../product';
import { AddProduct } from '../../checkout/cart';

@Component({
  selector: 'app-product-selected',
  template: `
    <app-product-details
      [product]="product$ | async"
      (addToCart)="addToCart($event)">
    </app-product-details>
  `,
  styles: [],
})
export class ProductSelectedComponent {
  product$: Observable<Product>;

  constructor(
    private store: Store<fromProducts.State>,
  ) {
    this.product$ = store.select(fromProducts.getSelectedProduct);
  }

  addToCart(addProduct: AddProduct): void {
    this.store.dispatch(new cartActions.AddToCartAction(addProduct));
  }
}
