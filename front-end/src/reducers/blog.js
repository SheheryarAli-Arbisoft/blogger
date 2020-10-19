import {
  BLOG_CREATED,
  ALL_BLOGS_LOADED,
  BLOG_ERROR,
  BLOG_DELETED,
  BLOG_LOADED,
  BLOG_UPDATED,
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
    case BLOG_LOADED:
      return {
        ...state,
        loading: false,
        error: null,
        blog: payload,
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
        blogs: [...state.blogs.filter(item => item.id !== payload)],
      };
    case BLOG_CREATED:
    case BLOG_UPDATED:
    default:
      return state;
  }
};
