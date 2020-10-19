import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_BLOG,
  LOAD_ALL_BLOGS,
  DELETE_BLOG,
  LOAD_BLOG,
  UPDATE_BLOG,
} from '../actions/types';
import { setAlert } from '../actions/alert';
import {
  blogError,
  blogCreated,
  allBlogsLoaded,
  blogDeleted,
  blogUpdated,
  blogLoaded,
} from '../actions/blog';

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

    yield put(blogCreated());

    yield put(setAlert('Blog created successfully'));

    history.goBack();
  } catch (err) {
    yield put(blogError(err));
  }
}

// Loading all blogs
function* loadAllBlogs() {
  try {
    const res = yield call(() => axios.get('/api/blogs/'));

    yield put(allBlogsLoaded(res.data));
  } catch (err) {
    yield put(blogError(err));
  }
}

// Delete a blog
function* deleteBlog(action) {
  const {
    payload: { id },
  } = action;

  try {
    yield call(() => axios.delete(`/api/blogs/${id}/`));

    yield put(blogDeleted(id));

    yield put(setAlert('Blog deleted successfully'));
  } catch (err) {
    yield put(blogError(err));
  }
}

// Load a blog
function* loadBlog(action) {
  const {
    payload: { id },
  } = action;

  try {
    const res = yield call(() => axios.get(`/api/blogs/${id}/`));

    yield put(blogLoaded(res.data));
  } catch (err) {
    yield put(blogError(err));
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

    yield put(blogUpdated());

    yield put(setAlert('Blog updated successfully'));

    history.goBack();
  } catch (err) {
    yield put(blogError(err));
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
