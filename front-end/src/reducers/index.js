import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { alert } from './alert';
import { auth } from './auth';
import { blog } from './blog';

export const rootReducer = combineReducers({
  alert,
  auth,
  blog,
  form: formReducer,
});
