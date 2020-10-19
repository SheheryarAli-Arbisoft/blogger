import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  SET_ALERT,
  CREATE_BLOG,
  BLOG_CREATED,
  LOAD_ALL_BLOGS,
  ALL_BLOGS_LOADED,
  BLOG_ERROR,
} from '../actions/types';

// Creating a new blog
function* createBlog(action) {
  const {
    payload: { title, description, history },
  } = action;

  const body = JSON.stringify({ title, description });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = yield call(() => axios.post('/api/blogs/', body, config));

    yield put({
      type: BLOG_CREATED,
      payload: res.data,
    });

    yield put({
      type: SET_ALERT,
      payload: 'Blog created successfully',
    });

    history.goBack();
  } catch (err) {
    yield put({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Loading all blogs
function* loadAllBlogs() {
  try {
    const res = yield call(() => axios.get('/api/blogs/'));

    yield put({
      type: ALL_BLOGS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

export function* blogSaga() {
  yield takeEvery(CREATE_BLOG, createBlog);
  yield takeEvery(LOAD_ALL_BLOGS, loadAllBlogs);
}
