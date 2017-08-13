import { Action } from '@ngrx/store';

import { Payment, Shipping } from '../../model/interface';
import { Order } from '../../order/order';
import { CreateOrder } from '../cart';

export const SELECT_PAYMENT = '[Checkout] Select Payment';
export const SELECT_CARRIER = '[Checkout] Select Carrier';
export const CREATE_ORDER = '[Checkout] Create Order';
export const CREATE_ORDER_SUCCESS = '[Checkout] Create Order Success';

export class SelectPaymentAction implements Action {
  readonly type = SELECT_PAYMENT;

  constructor(public payload: Payment) {}
}

export class SelectCarrierAction implements Action {
  readonly type = SELECT_CARRIER;

  constructor(public payload: Shipping) {}
}

export class CreateOrderAction implements Action {
  readonly type = CREATE_ORDER;

  constructor(public payload: CreateOrder) {}
}

export class CreateOrderSuccessAction implements Action {
  readonly type = CREATE_ORDER_SUCCESS;

  constructor(public payload: Order) {}
}

export type Actions =
  | SelectPaymentAction
  | SelectCarrierAction
  | CreateOrderAction
  | CreateOrderSuccessAction;
