import { LOAD_USER, LOGIN, REGISTER, LOGOUT } from './types';

export const loadUser = () => ({
  type: LOAD_USER,
});

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password },
});

export const register = (name, email, password) => ({
  type: REGISTER,
  payload: { name, email, password },
});

export const logout = () => ({
  type: LOGOUT,
});
