import { Action } from '@ngrx/store';
import { Payment } from '../payment';

export const LOAD = '[Payment Collection] Load';
export const LOAD_SUCCESS = '[Payment Collection] Load Success';
export const LOAD_FAIL = '[Payment Collection] Load Fail';

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
