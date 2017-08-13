import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderLine, Shipping, User } from '../../model/interface';
import { Payment } from '../../payment/payment';
import { CreateOrder } from '../cart';
import * as cartActions from '../actions/cart';
import * as checkoutActions from '../actions/checkout';
import * as fromCheckout from '../reducers';
import * as fromCarriers from '../../carrier/reducers';
import * as fromPayments from '../../payment/reducers';
import * as fromAuth from '../../auth/reducers';

@Component({
  selector: 'app-checkout-container',
  template: `
    <app-checkout
      [products]="products$ | async"
      [subtotal]="total$ | async"
      [selectedPayment]="selectedPayment$ | async"
      [selectedCarrier]="selectedCarrier$ | async"
      [carriers]="carriers$ | async"
      [payments]="payments$ | async"
      [auth]="auth$ | async"
      (removeLine)="removeItem($event)"
      (selectPayment)="selectPayment($event)"
      (selectCarrier)="selectCarrier($event)"
      (createOrder)="createOrder($event)">
    </app-checkout>
  `,
})
export class CheckoutContainerComponent implements OnInit {
  products$: Observable<OrderLine[]>;
  total$: Observable<number>;
  selectedPayment$: Observable<Payment>;
  selectedCarrier$: Observable<Shipping>;
  carriers$: Observable<Shipping[]>;
  payments$: Observable<Payment[]>;
  auth$: Observable<User>;

  constructor(private store: Store<fromCheckout.State>) {
    this.products$ = store.select(fromCheckout.getCartItems);
    this.total$ = store.select(fromCheckout.getCartTotal);
    this.selectedPayment$ = store.select(fromCheckout.getSelectedPayment);
    this.selectedCarrier$ = store.select(fromCheckout.getSelectedCarrier);
    this.carriers$ = store.select(fromCarriers.getCarrierCollection);
    this.payments$ = store.select(fromPayments.getPaymentCollection);
    this.auth$ = store.select(fromAuth.getUser);
  }

  ngOnInit() {}

  removeItem(line: OrderLine): void {
    this.store.dispatch(new cartActions.RemoveItemAction(line));
  }

  selectPayment(payment: Payment): void {
    this.store.dispatch(new checkoutActions.SelectPaymentAction(payment));
  }

  selectCarrier(carrier: Shipping): void {
    this.store.dispatch(new checkoutActions.SelectCarrierAction(carrier));
  }

  createOrder(createOrder: CreateOrder): void {
    console.log(createOrder);
    this.store.dispatch(new checkoutActions.CreateOrderAction(createOrder));
  }
}
