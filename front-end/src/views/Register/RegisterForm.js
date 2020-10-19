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
    // eslint-disable-next-line no-unneeded-ternary
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
            Register
          </Text>
        </GridItem>
        <GridItem xs={12}>
          <Field
            name='name'
            type='name'
            label='Name'
            component={renderInputField}
          />
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
          <Field
            name='cpassword'
            type='password'
            label='Confirm Password'
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
            Register
          </Button>
        </GridItem>
        <GridItem xs={12}>
          <Text variant='body2' align='center'>
            Already have an account?{' '}
            <Link to='/login'>Click here to login</Link>
          </Text>
        </GridItem>
      </Grid>
    </form>
  );
};

export const RegisterForm = reduxForm({
  form: 'register-form',
})(Form);
