import * as checkout from '../actions/checkout';
import { Payment, Shipping } from '../../model/interface';

export interface State {
  selectedPayment: Payment;
  selectedCarrier: Shipping;
}

export const initialState: State = {
  selectedPayment: null,
  selectedCarrier: null,
};

export function reducer(state = initialState, action: checkout.Actions): State {
  switch (action.type) {

    case checkout.SELECT_PAYMENT: {
      const payment = action.payload;

      return {
        ...state,
        selectedPayment: payment,
      };
    }

    case checkout.SELECT_CARRIER: {
      const carrier = action.payload;

      return {
        ...state,
        selectedCarrier: carrier,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedPayment = (state: State) => state.selectedPayment;

export const getSelectedCarrier = (state: State) => state.selectedCarrier;

export const getCheckoutState = (state: State) => state;
