import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromOrders from '../reducers';
import * as orderActions from '../actions/order';
import * as collectionActions from '../actions/collection';
import * as cartActions from '../../checkout/actions/cart';
import { Order } from '../order';
import { OrderLine } from '../../model/interface';

@Component({
  selector: 'app-order-selected',
  template: `
    <app-order
      [order]="order$ | async"
      [items]="items$ | async">
    </app-order>
  `,
  styles: [],
})
export class OrderSelectedComponent {
  order$: Observable<Order>;
  items$: Observable<OrderLine[]>;

  constructor(
    private store: Store<fromOrders.State>,
  ) {
    this.order$ = store.select(fromOrders.getSelectedOrder);
    this.items$ = store.select(fromOrders.getOrderProducts);
  }

}
