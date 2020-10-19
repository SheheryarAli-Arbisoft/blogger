import { takeLeading, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  AUTH_ERROR,
} from '../actions/types';

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
  }
}

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
  }
}

export function* authSaga() {
  yield takeLeading(LOGIN, login);
  yield takeLeading(REGISTER, register);
}
