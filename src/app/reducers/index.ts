import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  compose,
  ActionReducer,
  combineReducers,
  Action,
  ActionReducerFactory,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import * as fromLayout from '../core/reducers/layout';
import * as fromEntities from '../core/reducers/entities';

export interface State {
  layout: fromLayout.State;
  entities: fromEntities.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  entities: fromEntities.reducer,
};

export function logger(reducer: ActionReducer<State>) {
  return function(state: State, action: any) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const developmentReducerFactory: ActionReducerFactory<
  State,
  Action
> = compose(logger, combineReducers);

export const getEntities = fromEntities.getEntities;

export const getEntitiesState = createFeatureSelector<fromEntities.State>('entities');

export const getEntitiesVariants = createSelector(
  getEntitiesState,
  fromEntities.getVariants,
)

export const getEntitiesOptionValues = createSelector(
  getEntitiesState,
  fromEntities.getOptionValues,
)

export const getEntitiesOptionTypes = createSelector(
  getEntitiesState,
  fromEntities.getOptionTypes,
)

/**
 * Layout Reducers
 */
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
