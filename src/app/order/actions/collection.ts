import { Action } from '@ngrx/store';

import { Order } from '../order';
import { CreateOrder } from '../../checkout/cart';

export const ADD_ORDER = '[Order Collection] Add Order';
export const ADD_ORDER_SUCCESS = '[Order Collection] Add Order Success';
export const ADD_ORDER_FAIL = '[Order Collection] Add Order Fail';
export const LOAD = '[Order Collection] Load';
export const LOAD_SUCCESS = '[Order Collection] Load Success';
export const LOAD_FAIL = '[Order Collection] Load Fail';

/**
 * Add Order to Collection Actions
 */
export class AddOrderAction implements Action {
  readonly type = ADD_ORDER;

  constructor(public payload: CreateOrder) {}
}

export class AddOrderSuccessAction implements Action {
  readonly type = ADD_ORDER_SUCCESS;

  constructor(public payload: Order) {}
}

export class AddOrderFailAction implements Action {
  readonly type = ADD_ORDER_FAIL;

  constructor(public payload: Order) {}
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Order[]) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | AddOrderAction
  | AddOrderSuccessAction
  | AddOrderFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
