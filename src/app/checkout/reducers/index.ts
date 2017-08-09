import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCart from './cart';

export interface CheckoutState {
  cart: fromCart.State;
}

export interface State extends fromRoot.State {
  checkout: CheckoutState;
}

export const reducers = {
  cart: fromCart.reducer,
};

export const selectCheckoutState = createFeatureSelector<CheckoutState>('checkout');
//
// export const selectAuthStatusState = createSelector(
//   selectAuthState,
//   (state: AuthState) => state.status
// );
export const getCart = createSelector(selectCheckoutState, (state: CheckoutState) => state.cart);

export const getCartItems = createSelector(
  getCart,
  fromCart.getItems,
);

export const getCartTotal = createSelector(
  getCart,
  fromCart.getTotal,
);

//
// export const selectLoginPageState = createSelector(
//   selectAuthState,
//   (state: AuthState) => state.loginPage
// );
// export const getLoginPageError = createSelector(
//   selectLoginPageState,
//   fromLoginPage.getError
// );
// export const getLoginPagePending = createSelector(
//   selectLoginPageState,
//   fromLoginPage.getPending
// );
