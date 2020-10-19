import {
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
} from '../actions/types';

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
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
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
