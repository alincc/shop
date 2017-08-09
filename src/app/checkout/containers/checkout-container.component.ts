import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderLine } from '../../model/interface';
import * as cartActions from '../actions/cart';
import * as fromCart from '../reducers';

@Component({
  selector: 'app-checkout-container',
  template: `
    <app-checkout
      [products]="products$ | async"
      [subtotal]="total$ | async"
      (removeLine)="removeItem($event)">
    </app-checkout>
  `,
})
export class CheckoutContainerComponent implements OnInit {
  products$: Observable<OrderLine[]>;
  total$: Observable<number>;

  constructor(private store: Store<fromCart.State>) {
    this.products$ = store.select(fromCart.getCartItems);
    this.total$ = store.select(fromCart.getCartTotal);
  }

  ngOnInit() {}

  removeItem(line: OrderLine): void {
    this.store.dispatch(new cartActions.RemoveItemAction(line));
  }
}
