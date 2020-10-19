import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '../../components/Grid';
import { Text } from '../../components/Text';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const renderInputField = ({ input, type, label, meta: { touched, error } }) => (
  <Input
    {...input}
    type={type}
    label={label}
    error={touched && error ? true : false}
    helperText={error}
  />
);

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <GridItem xs={12}>
          <Text variant='h3' align='center' gutterBottom bold>
            <i className='fas fa-user' />
            Login
          </Text>
        </GridItem>
        <GridItem xs={12}>
          <Field
            name='email'
            type='email'
            label='Email'
            component={renderInputField}
          />
        </GridItem>
        <GridItem xs={12}>
          <Field
            name='password'
            type='password'
            label='Password'
            component={renderInputField}
          />
        </GridItem>
        <GridItem xs={12}>
          <Button
            type='submit'
            color='primary'
            variant='contained'
            size='large'
            fullWidth
          >
            Login
          </Button>
        </GridItem>
        <GridItem xs={12}>
          <Text variant='body2' align='center'>
            Don't have an account?{' '}
            <Link to='/register'>Click here to register</Link>
          </Text>
        </GridItem>
      </Grid>
    </form>
  );
};

export const LoginForm = reduxForm({
  form: 'login-form',
})(Form);
