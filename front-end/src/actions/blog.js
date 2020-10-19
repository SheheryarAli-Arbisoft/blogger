import {
  CREATE_BLOG,
  DELETE_BLOG,
  LOAD_ALL_BLOGS,
  LOAD_BLOG,
  UPDATE_BLOG,
  BLOG_ERROR,
  BLOG_CREATED,
  ALL_BLOGS_LOADED,
  BLOG_DELETED,
  BLOG_UPDATED,
} from './types';

export const createBlog = (title, description, history) => ({
  type: CREATE_BLOG,
  payload: { title, description, history },
});

export const blogCreated = () => ({
  type: CREATE_BLOG,
});

export const loadAllBlogs = () => ({
  type: LOAD_ALL_BLOGS,
});

export const allBlogsLoaded = data => ({
  type: ALL_BLOGS_LOADED,
  payload: data,
});

export const deleteBlog = id => ({
  type: DELETE_BLOG,
  payload: { id },
});

export const blogDeleted = id => ({
  type: BLOG_DELETED,
  payload: id,
});

export const loadBlog = id => ({
  type: LOAD_BLOG,
  payload: { id },
});

export const blogLoaded = data => ({
  type: LOAD_BLOG,
  payload: data,
});

export const updateBlog = (id, title, description, history) => ({
  type: UPDATE_BLOG,
  payload: { id, title, description, history },
});

export const blogUpdated = () => ({
  type: BLOG_UPDATED,
});

export const blogError = err => ({
  type: BLOG_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status },
});
