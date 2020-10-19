import { createSelector } from 'reselect';

export const loadingSelector = createSelector(
  state => state.blog.loading,
  loading => loading
);

export const blogsSelector = createSelector(
  state => state.blog.blogs,
  blogs => blogs
);

export const blogSelector = createSelector(
  state => state.blog.blog,
  blog => blog
);
