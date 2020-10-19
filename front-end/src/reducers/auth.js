import { LOGIN_SUCCESS, AUTH_ERROR } from '../actions/types';

const initialState = {
  user: null,
  loading: true,
  isAuthenticated: false,
  error: null,
  token: localStorage.getItem('token'),
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
