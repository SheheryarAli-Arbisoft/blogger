import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN, LOGIN_SUCCESS, AUTH_ERROR } from '../actions/types';

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
    console.log(err);
    yield put({
      type: AUTH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN, login);
}
