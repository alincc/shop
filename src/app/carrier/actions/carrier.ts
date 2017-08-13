import { Action } from '@ngrx/store';
import { Shipping } from '../carrier';

export const SEARCH = '[Carrier] Search';
export const SEARCH_COMPLETE = '[Carrier] Search Complete';
export const LOAD = '[Carrier] Load';
export const SELECT = '[Carrier] Select';

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Shipping[]) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Shipping) {}
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
