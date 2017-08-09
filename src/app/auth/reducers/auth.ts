import * as auth from '../actions/auth';
import { User } from '../user';

export interface State {
  loggedIn: boolean;
  checked: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  checked: false,
  user: null,
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case auth.LOGOUT: {
      return initialState;
    }

    case auth.CHECK: {
      return {
        ...state,
        checked: true,
      }
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
