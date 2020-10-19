import React, { useEffect } from 'react';
import { SubmissionError } from 'redux-form';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EditBlogForm } from './EditBlogForm';
import { Grid, GridItem } from '../../components/Grid';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { updateBlog, loadBlog } from '../../actions/blog';
import { userSelector } from '../../selectors/auth';
import { loadingSelector, blogSelector } from '../../selectors/blog';

export const EditBlog = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(loadingSelector);
  const blog = useSelector(blogSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    dispatch(loadBlog(id));
  }, [user]);

  const handleSubmit = values => {
    const { title, description } = values;

    if (!title) {
      throw new SubmissionError({ title: 'Please enter a title' });
    } else if (!description) {
      throw new SubmissionError({ description: 'Please enter a description' });
    } else {
      dispatch(updateBlog(id, title, description, history));
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
          <i className='fas fa-blog' /> Fill in the information to edit the blog
        </Text>
      </GridItem>
      <GridItem xs={12}>
        {!loading && blog !== null && (
          <EditBlogForm
            onSubmit={handleSubmit}
            initialValues={{
              title: blog !== null ? blog.title : '',
              description: blog !== null ? blog.description : '',
            }}
          />
        )}
      </GridItem>
    </Grid>
  );
};
