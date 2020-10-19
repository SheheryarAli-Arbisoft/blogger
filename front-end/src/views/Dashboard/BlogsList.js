import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllBlogs } from '../../actions/blog';
import { userSelector } from '../../selectors/auth';
import { Card } from '../../components/Card';

export const BlogsList = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(loadAllBlogs());
  }, [user]);

  return (
    <Fragment>
      <Card />
      <Card />
      <Card />
    </Fragment>
  );
};
