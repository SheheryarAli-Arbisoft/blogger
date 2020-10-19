import { CREATE_BLOG, DELETE_BLOG, LOAD_ALL_BLOGS, LOAD_BLOG } from './types';

export const createBlog = (title, description, history) => ({
  type: CREATE_BLOG,
  payload: { title, description, history },
});

export const loadAllBlogs = () => ({
  type: LOAD_ALL_BLOGS,
});

export const deleteBlog = id => ({
  type: DELETE_BLOG,
  payload: { id },
});

export const loadBlog = id => ({
  type: LOAD_BLOG,
  payload: { id },
});
