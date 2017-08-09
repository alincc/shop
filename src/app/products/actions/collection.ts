import { Action } from '@ngrx/store';
import { Product } from '../../model/interface';

export const LOAD = '[Product Collection] Load';
export const LOAD_SUCCESS = '[Product Collection] Load Success';
export const LOAD_FAIL = '[Product Collection] Load Fail';

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: string[]) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
