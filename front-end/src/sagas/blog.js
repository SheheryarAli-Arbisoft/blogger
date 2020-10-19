import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_BLOG,
  BLOG_CREATED,
  LOAD_ALL_BLOGS,
  ALL_BLOGS_LOADED,
  DELETE_BLOG,
  BLOG_DELETED,
  BLOG_ERROR,
  LOAD_BLOG,
  BLOG_LOADED,
  UPDATE_BLOG,
  BLOG_UPDATED,
} from '../actions/types';
import { setAlert } from '../actions/alert';

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
    yield call(() => axios.post('/api/blogs/', body, config));

    yield put({ type: BLOG_CREATED });

    yield put(setAlert('Blog created successfully'));

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

// Delete a blog
function* deleteBlog(action) {
  const {
    payload: { id },
  } = action;

  try {
    yield call(() => axios.delete(`/api/blogs/${id}/`));

    yield put({
      type: BLOG_DELETED,
      payload: id,
    });

    yield put(setAlert('Blog deleted successfully'));
  } catch (err) {
    yield put({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Load a blog
function* loadBlog(action) {
  const {
    payload: { id },
  } = action;

  try {
    const res = yield call(() => axios.get(`/api/blogs/${id}/`));

    yield put({
      type: BLOG_LOADED,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Updating a blog
function* updateBlog(action) {
  const {
    payload: { id, title, description, history },
  } = action;

  const body = JSON.stringify({ title, description });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    yield call(() => axios.put(`/api/blogs/${id}/`, body, config));

    yield put({ type: BLOG_UPDATED });

    yield put(setAlert('Blog updated successfully'));

    history.goBack();
  } catch (err) {
    yield put({
      type: BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}

// Initializing the watchers
export function* blogSaga() {
  yield takeEvery(CREATE_BLOG, createBlog);
  yield takeEvery(LOAD_ALL_BLOGS, loadAllBlogs);
  yield takeEvery(DELETE_BLOG, deleteBlog);
  yield takeEvery(LOAD_BLOG, loadBlog);
  yield takeEvery(UPDATE_BLOG, updateBlog);
}
