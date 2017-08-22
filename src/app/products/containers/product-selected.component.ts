import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as fromRoot from '../../reducers';
import * as productActions from '../actions/product';
import * as collectionActions from '../actions/collection';
import * as cartActions from '../../checkout/actions/cart';
import { Product, OptionType, Variant } from '../product';
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
  product$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    const product$ = store.select(fromProducts.getSelectedProduct);
    const variants$ = store.select(fromRoot.getEntitiesVariants);
    const optionValues$ = store.select(fromRoot.getEntitiesOptionValues);
    const optionTypes$ = store.select(fromRoot.getEntitiesOptionTypes);

    this.product$ = Observable.combineLatest(
      product$, variants$, optionValues$, optionTypes$,
      (product, variants, optionValues, optionTypes) => {
      if (!variants || !product || !optionValues) return null;

      return new Product(Object.assign({}, product, {
        variants: product.variants.reduce((list, id) => {
          if (variants[id]) {
            const variant = Object.assign({}, variants[id], {
              options: variants[id].options.map(id => optionValues[id]),
            })

            list.push(variant)
          }
          return list;
        }, []),
        optionTypes: product.optionTypes.map(id => optionTypes[id]),
      }));
    })

  }

  addToCart(variant: Variant): void {
    this.store.dispatch(new cartActions.AddToCartAction(variant));
  }
}
