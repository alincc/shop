import * as entities from '../actions/entities';

export interface State {
  entities: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  entities: {},
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
          ...state.entities,
          ...payload.entities,
        }
      };
    }

    default:
      return state;
  }
}

export const getEntitiesLoaded = (state: State) => state.loaded;

export const getEntities = (state: State) => state.entities.entities;
