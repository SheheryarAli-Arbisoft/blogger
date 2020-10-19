import { createSelector } from 'reselect';

export const openSelector = createSelector(
  state => state.alert.open,
  open => open
);

export const messageSelector = createSelector(
  state => state.alert.message,
  message => message
);
