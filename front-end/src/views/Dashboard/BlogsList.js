import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, GridItem } from '../../components/Grid';
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
    <Grid>
      {!loading &&
        blogs.length > 0 &&
        user !== null &&
        blogs.map(blog => (
          <GridItem key={blog.id} xs={4}>
            <Card blog={blog} showActions={user.id === blog.owner} />
          </GridItem>
        ))}
    </Grid>
  );
};
