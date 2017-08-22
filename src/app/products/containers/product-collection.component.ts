import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as collectionActions from '../actions/collection';
import * as cartActions from '../../checkout/actions/cart';
import { Product, Variant } from '../../products/product';
import { AddProduct } from '../../checkout/cart';

@Component({
  selector: 'app-product-collection',
  template: `
    <app-products-container
      [products]="products$ | async"
      (addToCart)="onAddToCart($event)">
    </app-products-container>
  `,
  styles: [],
})
export class ProductCollectionComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.State>) {
    this.products$ = this.store.select(fromProducts.getProductCollection);
  }

  onAddToCart(variant: Variant): void {
    this.store.dispatch(new cartActions.AddToCartAction(variant));
  }

}
