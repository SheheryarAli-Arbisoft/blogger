import { BLOG_CREATED, BLOG_ERROR } from '../actions/types';

const initialState = {
  blog: null,
  blogs: [],
  loading: true,
  error: null,
};

export const blog = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_CREATED:
      return {
        ...state,
        loading: false,
        error: null,
        blogs: [...state.blogs, payload],
      };
    case BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
