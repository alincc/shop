import * as cart from '../actions/cart';

import { OrderLine } from '../../model/interface';

export interface State {
  items: OrderLine[];
  total: number;
}

export const initialState: State = {
  items: [],
  total: 0,
};

export function reducer(state = initialState, action: cart.Actions): State {
  switch (action.type) {
    case cart.REMOVE_ITEM_SUCCESS:
    case cart.LOAD_SUCCESS:
    case cart.ADD_TO_CART_SUCCESS: {
      const items = action.payload;

      const total = items.reduce((sum, item) => {
        return sum + (item.product.getCurrentPrice() * item.quantity);
      }, 0);

      return {
        ...state,
        total: total,
        items: items,
      };
    }

    case cart.CLEAR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: State) => state.items;

export const getTotal = (state: State) => state.total;

export const getCartState = (state: State) => state;
