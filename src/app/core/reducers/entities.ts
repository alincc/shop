import * as entities from '../actions/entities';

export interface State {
  entities: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  entities: {
    carriers: {},
    variants: {},
    optionValues: {},
    optionTypes: {},
    payments: {},
    categories: {},
    products: {},
    lines: {},
    orders: {},
    users: {},
  },
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: entities.Actions): State {
  switch (action.type) {
    case entities.LOAD:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case entities.LOAD_SUCCESS: {
      const payload = action.payload;

      return {
        loading: false,
        loaded: true,
        entities: {
          carriers: {...state.entities.carriers, ...payload.entities.carriers,},
          payments: {...state.entities.payments, ...payload.entities.payments},
          categories: {...state.entities.categories, ...payload.entities.categories},
          products: {...state.entities.products, ...payload.entities.products},
          lines: {...state.entities.lines, ...payload.entities.lines},
          orders: {...state.entities.orders, ...payload.entities.orders},
          variants: {...state.entities.variants, ...payload.entities.variants},
          optionValues: {...state.entities.optionValues, ...payload.entities.optionValues},
          optionTypes: {...state.entities.optionTypes, ...payload.entities.optionTypes},
          users: {...state.entities.users, ...payload.entities.users},
        },
      };
    }

    default:
      return state;
  }
}

export const getEntitiesLoaded = (state: State) => state.loaded;

export const getEntities = (state: State) => state.entities.entities;

export const getVariants = (state: State) => state.entities.variants;

export const getOptionValues = (state: State) => state.entities.optionValues;

export const getOptionTypes = (state: State) => state.entities.optionTypes;
