import { takeLeading, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { setAuthToken } from '../utils';
import { LOAD_USER, LOGIN, REGISTER } from '../actions/types';
import { setAlert } from '../actions/alert';
import {
  loginSuccess,
  registerSuccess,
  authError,
  userLoaded,
} from '../actions/auth';

// Login a user
function* login(action) {
  const {
    payload: { email, password },
  } = action;

  const body = JSON.stringify({ email, password });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = yield call(() => axios.post('/api/users/login/', body, config));

    yield put(loginSuccess(res.data.token));

    yield loadUser();
  } catch (err) {
    yield put(authError(err));

    if (err.response.status === 401) {
      yield put(setAlert('Invalid credentials'));
    }
  }
}

// Register a user
function* register(action) {
  const {
    payload: { name, email, password },
  } = action;

  const body = JSON.stringify({ name, email, password });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = yield call(() => axios.post('/api/users/', body, config));

    yield put(registerSuccess(res.data.token));

    yield loadUser();
  } catch (err) {
    yield put(authError(err));

    if (err.response.status === 400) {
      yield put(setAlert('User with this email already exists'));
    }
  }
}

// Loading the current user
function* loadUser() {
  try {
    setAuthToken();

    const res = yield call(() => axios.get('/api/users/current/'));

    yield put(userLoaded(res.data));
  } catch (err) {
    yield put(setAlert('User with this email already exists'));
  }
}

// Initializing the watchers
export function* authSaga() {
  yield takeLeading(LOGIN, login);
  yield takeLeading(REGISTER, register);
  yield takeLeading(LOAD_USER, loadUser);
}
