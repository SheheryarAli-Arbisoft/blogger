import { CREATE_BLOG } from './types';

export const createBlog = (title, description, history) => ({
  type: CREATE_BLOG,
  payload: { title, description, history },
});
