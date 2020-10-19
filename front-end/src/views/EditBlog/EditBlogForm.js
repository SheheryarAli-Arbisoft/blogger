import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '../../components/Grid';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const renderInputField = ({
  input,
  type,
  label,
  meta: { touched, error },
  ...rest
}) => (
  <Input
    {...input}
    type={type}
    label={label}
    error={touched && error ? true : false}
    helperText={error}
    {...rest}
  />
);

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <GridItem xs={12}>
          <Field
            name='title'
            type='text'
            label='Title'
            component={renderInputField}
          />
        </GridItem>
        <GridItem xs={12}>
          <Field
            name='description'
            type='text'
            label='Description'
            multiline
            rows={10}
            component={renderInputField}
          />
        </GridItem>
        <GridItem xs={12}>
          <Button
            type='submit'
            color='primary'
            variant='contained'
            size='large'
          >
            Submit
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};

export const EditBlogForm = reduxForm({
  form: 'create-blog-form',
})(Form);
