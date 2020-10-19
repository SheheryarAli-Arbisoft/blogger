import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import { loadAllBlogs } from '../../actions/blog';
import { userSelector } from '../../selectors/auth';
import { loadingSelector, blogsSelector } from '../../selectors/blog';

export const BlogsList = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(loadAllBlogs());
  }, [user]);

  const loading = useSelector(loadingSelector);
  const blogs = useSelector(blogsSelector);

  return (
    !loading &&
    blogs.length > 0 &&
    blogs.map(blog => <Card key={blog.id} blog={blog} />)
  );
};
