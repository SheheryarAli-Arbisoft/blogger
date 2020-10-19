import { CREATE_BLOG, DELETE_BLOG, LOAD_ALL_BLOGS } from './types';

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
