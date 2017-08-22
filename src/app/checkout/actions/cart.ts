import { Action } from '@ngrx/store';

import { Product, Variant } from '../../products/product';
import { AddProduct } from '../cart';
import { OrderLine } from '../../model/interface';

export const ADD_TO_CART = '[Cart] Add To Cart';
export const ADD_TO_CART_SUCCESS = '[Cart] Add To Cart Success';
export const ADD_TO_CART_FAIL = '[Cart] Add To Cart Fail';
export const LOAD = '[Cart] Load';
export const LOAD_SUCCESS = '[Cart] Load Success';
export const LOAD_FAIL = '[Cart] Load Fail';
export const REMOVE_ITEM = '[Cart] Remove Item';
export const REMOVE_ITEM_SUCCESS = '[Cart] Remove Item Success';
export const REMOVE_ITEM_FAIL = '[Cart] Remove Item Fail';
export const CLEAR = '[Cart] Clear';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export class AddToCartAction implements Action {
  readonly type = ADD_TO_CART;

  constructor(public payload: Variant) {}
}

export class AddToCartSuccessAction implements Action {
  readonly type = ADD_TO_CART_SUCCESS;

  constructor(public payload: any) {}
}

export class AddToCartFailAction implements Action {
  readonly type = ADD_TO_CART_FAIL;

  constructor(public payload: any) {}
}

export class RemoveItemAction implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: OrderLine) {}
}

export class RemoveItemSuccessAction implements Action {
  readonly type = REMOVE_ITEM_SUCCESS;

  constructor(public payload: any) {}
}

export class RemoveItemFailAction implements Action {
  readonly type = REMOVE_ITEM_FAIL;

  constructor(public payload: any) {}
}

export class ClearAction implements Action {
  readonly type = CLEAR;
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | AddToCartAction
  | AddToCartSuccessAction
  | AddToCartFailAction
  | RemoveItemAction
  | RemoveItemSuccessAction
  | RemoveItemFailAction
  | ClearAction;
