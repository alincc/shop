import { createSelector } from '@ngrx/store';
import { Payment } from '../payment';
import * as payment from '../actions/payment';
import * as collection from '../actions/collection';

export interface State {
  ids: string[];
  entities: { [id: string]: Payment };
  selectedPaymentId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedPaymentId: null,
};

export function reducer(
  state = initialState,
  action: payment.Actions | collection.Actions
): State {
  switch (action.type) {
    case payment.SEARCH_COMPLETE: {
      const payments = action.payload;
      const newPayments = payments.filter(payment => !state.entities[payment._id]);

      const newPaymentIds = newPayments.map(payment => payment._id);
      const newPaymentEntities = newPayments.reduce(
        (entities: { [id: string]: Payment }, payment: Payment) => {
          return Object.assign(entities, {
            [payment._id]: payment,
          });
        },
        {}
      );

      return {
        ids: [...state.ids, ...newPaymentIds],
        entities: Object.assign({}, state.entities, newPaymentEntities),
        selectedPaymentId: state.selectedPaymentId,
      };
    }

    case payment.LOAD: {
      const payment = action.payload;

      if (state.ids.indexOf(payment._id) > -1) {
        return state;
      }

      return {
        ids: [...state.ids, payment._id],
        entities: Object.assign({}, state.entities, {
          [payment._id]: payment,
        }),
        selectedPaymentId: state.selectedPaymentId,
      };
    }

    case payment.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedPaymentId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedPaymentId;

export const getSelected = createSelector(
  getEntities,
  getSelectedId,
  (entities, selectedId) => {
    return entities[selectedId];
  }
);

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
