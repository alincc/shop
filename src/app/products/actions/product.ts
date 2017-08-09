import { Action } from '@ngrx/store';
import { Product } from '../../model/interface';

export const SEARCH = '[Product] Search';
export const SEARCH_COMPLETE = '[Product] Search Complete';
export const LOAD = '[Product] Load';
export const SELECT = '[Product] Select';

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Product[]) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Product) {}
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
