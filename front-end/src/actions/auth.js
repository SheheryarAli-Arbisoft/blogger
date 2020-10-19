import { LOGIN, REGISTER } from './types';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password },
});

export const register = (name, email, password) => ({
  type: REGISTER,
  payload: { name, email, password },
});
