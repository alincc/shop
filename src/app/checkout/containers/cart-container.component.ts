import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderLine } from '../../model/interface';
import * as cartActions from '../actions/cart';
import * as fromCart from '../reducers';

@Component({
  selector: 'app-cart-container',
  template: `
    <app-cart
      [products]="items$ | async"
      (removeItem)="removeItem($event)">
    </app-cart>
  `,
  styles: [],
})
export class CartContainerComponent implements OnInit {
  items$: Observable<OrderLine[]>;

  constructor(private store: Store<fromCart.State>) {
    this.items$ = store.select(fromCart.getCartItems);
  }

  ngOnInit() {}

  removeItem(line: OrderLine): void {
    this.store.dispatch(new cartActions.RemoveItemAction(line));
  }
}
