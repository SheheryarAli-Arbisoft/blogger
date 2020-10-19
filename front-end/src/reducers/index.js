import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { alert } from './alert';
import { auth } from './auth';

export const rootReducer = combineReducers({
  alert,
  auth,
  form: formReducer,
});
