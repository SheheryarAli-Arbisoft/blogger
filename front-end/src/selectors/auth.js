import { createSelector } from 'reselect';

export const loadingSelector = createSelector(
  state => state.auth.loading,
  loading => loading
);

export const isAuthenticatedSelector = createSelector(
  state => state.auth.isAuthenticated,
  isAuthenticated => isAuthenticated
);
