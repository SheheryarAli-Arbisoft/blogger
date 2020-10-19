import {
  BLOG_CREATED,
  ALL_BLOGS_LOADED,
  BLOG_ERROR,
  BLOG_DELETED,
} from '../actions/types';

const initialState = {
  blog: null,
  blogs: [],
  loading: true,
  error: null,
};

export const blog = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_BLOGS_LOADED:
      return {
        ...state,
        loading: false,
        error: null,
        blogs: payload,
      };
    case BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case BLOG_DELETED:
      return {
        ...state,
        loading: false,
        error: null,
        blogs: [...state.blogs.filter(blog => blog.id !== payload)],
      };
    case BLOG_CREATED:
    default:
      return state;
  }
};
