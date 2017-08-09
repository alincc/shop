import { Action } from '@ngrx/store';
import { Category } from '../../model/interface';

export const LOAD = '[Category Collection] Load';
export const LOAD_SUCCESS = '[Category Collection] Load Success';
export const LOAD_FAIL = '[Category Collection] Load Fail';

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
