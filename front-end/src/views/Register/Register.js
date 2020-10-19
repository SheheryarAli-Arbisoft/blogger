import React from 'react';
import { Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '../../components/Paper';
import { RegisterForm } from './RegisterForm';
import { loadingSelector, isAuthenticatedSelector } from '../../selectors/auth';
import { register } from '../../actions/auth';

export const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const handleSubmit = values => {
    const { name, email, password, cpassword } = values;

    if (!name) {
      throw new SubmissionError({ name: 'Please enter your name' });
    } else if (!email) {
      throw new SubmissionError({ email: 'Please enter a valid email' });
    } else if (!password) {
      throw new SubmissionError({ password: 'Please enter your password' });
    } else if (!cpassword || password !== cpassword) {
      throw new SubmissionError({ cpassword: 'Passwords do not match' });
    } else if (password.length < 6) {
      throw new SubmissionError({
        password: 'Password must contain atleast 6 characters',
      });
    } else {
      dispatch(register(name, email, password));
    }
  };

  if (!loading && isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Paper>
      <RegisterForm onSubmit={handleSubmit} />
    </Paper>
  );
};
