import {
  LOAD_USER,
  LOGIN,
  REGISTER,
  LOGOUT,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
} from './types';

export const loadUser = () => ({
  type: LOAD_USER,
});

export const userLoaded = data => ({
  type: USER_LOADED,
  payload: data,
});

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password },
});

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const register = (name, email, password) => ({
  type: REGISTER,
  payload: { name, email, password },
});

export const registerSuccess = token => ({
  type: REGISTER_SUCCESS,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const authError = err => ({
  type: AUTH_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status },
});
