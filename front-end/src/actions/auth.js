import { LOGIN } from './types';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password },
});
