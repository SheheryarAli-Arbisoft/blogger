import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, GridItem } from '../components/Grid';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import { loadingSelector, blogSelector } from '../selectors/blog';
import { userSelector } from '../selectors/auth';
import { loadBlog } from '../actions/blog';

export const Blog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(userSelector);
  const loading = useSelector(loadingSelector);
  const blog = useSelector(blogSelector);
  const history = useHistory();

  useEffect(() => {
    dispatch(loadBlog(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Grid>
      <GridItem xs={12}>
        <Button variant='outlined' onClick={() => history.goBack()}>
          <i className='fas fa-arrow-left' />
          Go back
        </Button>
      </GridItem>
      <GridItem xs={12}>
        <Text variant='h4' bold>
          {!loading && blog !== null && blog.title}
        </Text>
      </GridItem>
      <GridItem xs={12}>
        <Text variant='h6' color='textSecondary'>
          Created on{' '}
          {
            <Moment format='DD-MMM-YYYY'>
              {!loading && blog !== null && blog.timestamp}
            </Moment>
          }
          ,{' '}
          {
            <Moment format='hh:mm a'>
              {!loading && blog !== null && blog.timestamp}
            </Moment>
          }
        </Text>
      </GridItem>
      <GridItem xs={12}>
        <Text>{!loading && blog !== null && blog.description}</Text>
      </GridItem>
    </Grid>
  );
};
