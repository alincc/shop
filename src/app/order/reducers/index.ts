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
import * as fromOrders from './orders';
import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';
import { Order } from '../order';
import { Product } from '../../products/product';

export interface OrdersState {
  search: fromSearch.State;
  orders: fromOrders.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  'orders': OrdersState;
}

export const reducers = {
  search: fromSearch.reducer,
  orders: fromOrders.reducer,
  collection: fromCollection.reducer,
};

export const getOrdersState = createFeatureSelector<OrdersState>('orders');

export const getOrderEntitiesState = createSelector(
  getOrdersState,
  (state: OrdersState) => state.orders
);
export const getOrderEntities = createSelector(
  getOrderEntitiesState,
  fromOrders.getEntities
);
export const getOrderIds = createSelector(
  getOrderEntitiesState,
  fromOrders.getIds
);
export const getSelectedOrderId = createSelector(
  getOrderEntitiesState,
  fromOrders.getSelectedId
);
// export const getSelectedOrder = createSelector(
//   getOrderEntitiesState,
//   fromOrders.getSelected
// );

export const getSearchState = createSelector(
  getOrdersState,
  (state: OrdersState) => state.search
);

export const getSearchOrderIds = createSelector(
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
  getOrderEntities,
  getSearchOrderIds,
  (orders, searchIds) => {
    return searchIds.map(id => orders[id]);
  }
);

export const getCollectionState = createSelector(
  getOrdersState,
  (state: OrdersState) => state.collection
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromCollection.getLoading
);
export const getCollectionOrderIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);
//
// export const getOrderCollection = createSelector(
//   getOrderEntities,
//   getCollectionOrderIds,
//   (entities, ids) => {
//     return ids.map(id => entities[id]);
//   }
// );

export const isSelectedOrderInCollection = createSelector(
  getCollectionOrderIds,
  getSelectedOrderId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);

export const getOrderCollection = createSelector(
  getCollectionOrderIds,
  fromRoot.getEntities,
  (ids, entities) => {
    if (!entities.orders) return [];

    return ids.map(id => entities.orders[id]);
  }
)

export const getSelectedOrder = createSelector(
  getSelectedOrderId,
  fromRoot.getEntities,
  (id, entities) => {
    if (!entities.orders) return null;

    return entities.orders[id];
  }
)

export const getOrderProducts = createSelector(
  getSelectedOrder,
  fromRoot.getEntities,
  (order, entities) => {
    if (!entities.products) return null;
    if (!entities.lines) return null;
    if (!order) return null;

    return order.items.map(lineId => {
      const line = entities.lines[lineId];

      return {
        ...line,
        product: entities.products[line.product],
      }
    })
  }
)
