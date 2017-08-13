import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  compose,
  ActionReducer,
  combineReducers,
  Action,
  ActionReducerFactory,
  MemoizedSelector,
} from '@ngrx/store';
import * as fromSearch from './search';
import * as fromPayments from './payments';
import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';

export interface PaymentsState {
  search: fromSearch.State;
  payments: fromPayments.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  'payments': PaymentsState;
}

export const reducers = {
  search: fromSearch.reducer,
  payments: fromPayments.reducer,
  collection: fromCollection.reducer,
};

export const getPaymentsState = createFeatureSelector<PaymentsState>('payments');

export const getPaymentEntitiesState = createSelector(
  getPaymentsState,
  (state: PaymentsState) => state.payments
);
export const getPaymentEntities = createSelector(
  getPaymentEntitiesState,
  fromPayments.getEntities
);
export const getPaymentIds = createSelector(
  getPaymentEntitiesState,
  fromPayments.getIds
);
export const getSelectedPaymentId = createSelector(
  getPaymentEntitiesState,
  fromPayments.getSelectedId
);
// export const getSelectedPayment = createSelector(
//   getPaymentEntitiesState,
//   fromPayments.getSelected
// );

export const getSearchState = createSelector(
  getPaymentsState,
  (state: PaymentsState) => state.search
);

export const getSearchPaymentIds = createSelector(
  getSearchState,
  fromSearch.getIds
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);

export const getSearchResults = createSelector(
  getPaymentEntities,
  getSearchPaymentIds,
  (payments, searchIds) => {
    return searchIds.map(id => payments[id]);
  }
);

export const getCollectionState = createSelector(
  getPaymentsState,
  (state: PaymentsState) => state.collection
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromCollection.getLoading
);
export const getCollectionPaymentIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

// export const getPaymentCollection = createSelector(
//   getPaymentEntities,
//   getCollectionPaymentIds,
//   (entities, ids) => {
//     return ids.map(id => entities[id]);
//   }
// );

export const isSelectedPaymentInCollection = createSelector(
  getCollectionPaymentIds,
  getSelectedPaymentId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);

export const getPaymentCollection = createSelector(
  getCollectionPaymentIds,
  fromRoot.getEntities,
  (ids, entities) => {
    if (!entities.payments) return [];

    return ids.map(id => entities.payments[id]);
  }
)

export const getSelectedPayment = createSelector(
  getSelectedPaymentId,
  fromRoot.getEntities,
  (id, entities) => {
    if (!entities.payments) return null;

    return entities.payments[id];
  }
)
