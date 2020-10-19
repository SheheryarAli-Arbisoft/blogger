import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  open: false,
  message: '',
};

export const alert = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        open: true,
        message: payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        open: false,
        message: '',
      };
    default:
      return state;
  }
};
