import { Action } from '@ngrx/store';

export const ADD_ORDER = '[Auth] Add Order';

export class AddOrderAction implements Action {
  readonly type = ADD_ORDER;

  constructor(public payload: string) {}
}

export type Actions =
  | AddOrderAction;
