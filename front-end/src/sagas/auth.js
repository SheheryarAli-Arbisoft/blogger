import { takeLeading, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { setAuthToken } from '../utils';
import {
  SET_ALERT,
  LOAD_USER,
  USER_LOADED,
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  AUTH_ERROR,
} from '../actions/types';

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

    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    yield put({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    if (err.response.status === 401) {
      yield put({
        type: SET_ALERT,
        payload: 'Invalid credentials',
      });
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

    yield put({
      type: REGISTER_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    yield put({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    if (err.response.status === 400) {
      yield put({
        type: SET_ALERT,
        payload: 'User with this email already exists',
      });
    }
  }
}

function* loadUser() {
  try {
    setAuthToken();

    const res = yield call(() => axios.get('/api/users/current/'));

    yield put({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Initializing the watchers
export function* authSaga() {
  yield takeLeading(LOGIN, login);
  yield takeLeading(REGISTER, register);
  yield takeLeading(LOAD_USER, loadUser);
}
