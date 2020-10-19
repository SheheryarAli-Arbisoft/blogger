import React from 'react';
import { SubmissionError } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateBlogForm } from './CreateBlogForm';
import { Grid, GridItem } from '../../components/Grid';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { createBlog } from '../../actions/blog';

export const CreateBlog = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { title, description } = values;

    if (!title) {
      throw new SubmissionError({ title: 'Please enter a title' });
    } else if (!description) {
      throw new SubmissionError({ description: 'Please enter a description' });
    } else {
      dispatch(createBlog(title, description, history));
    }
  };

  return (
    <Grid>
      <GridItem xs={12}>
        <Button variant='outlined' onClick={() => history.goBack()}>
          <i className='fas fa-arrow-left' />
          Go back
        </Button>
      </GridItem>
      <GridItem xs={12}>
        <Text variant='h4' gutterBottom>
          <i className='fas fa-blog' /> Fill in the information to create a new
          blog
        </Text>
      </GridItem>
      <GridItem xs={12}>
        <CreateBlogForm onSubmit={handleSubmit} />
      </GridItem>
    </Grid>
  );
};
