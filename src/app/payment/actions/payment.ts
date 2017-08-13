import { Action } from '@ngrx/store';
import { Payment } from '../payment';

export const SEARCH = '[Payment] Search';
export const SEARCH_COMPLETE = '[Payment] Search Complete';
export const LOAD = '[Payment] Load';
export const SELECT = '[Payment] Select';

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Payment[]) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Payment) {}
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  | SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;
