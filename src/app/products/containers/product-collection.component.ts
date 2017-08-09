import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as collectionActions from '../actions/collection';
import { Product } from '../../model/interface';

@Component({
  selector: 'app-product-collection',
  template: `
    <app-products-container
      [products]="products$ | async">
    </app-products-container>
  `,
  styles: [],
})
export class ProductCollectionComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.State>) {
    this.products$ = this.store.select(fromProducts.getProductCollection);
  }

}
