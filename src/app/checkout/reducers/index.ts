import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCart from './cart';
import * as fromCheckout from './checkout';

export interface CheckoutState {
  cart: fromCart.State;
  checkout: fromCheckout.State;
}

export interface State extends fromRoot.State {
  checkout: CheckoutState;
}

export const reducers = {
  cart: fromCart.reducer,
  checkout: fromCheckout.reducer,
};

export const selectCheckoutState = createFeatureSelector<CheckoutState>('checkout');

export const getCart = createSelector(selectCheckoutState, (state: CheckoutState) => state.cart);
export const getCheckout = createSelector(selectCheckoutState, (state: CheckoutState) => state.checkout);

export const getCartItems = createSelector(
  getCart,
  fromCart.getItems,
);

export const getCartTotal = createSelector(
  getCart,
  fromCart.getTotal,
);

export const getSelectedPayment = createSelector(
  getCheckout,
  fromCheckout.getSelectedPayment,
);

export const getSelectedCarrier = createSelector(
  getCheckout,
  fromCheckout.getSelectedCarrier,
);
