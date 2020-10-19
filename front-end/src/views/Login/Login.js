import React from 'react';
import { Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { Paper } from '../../components/Paper';
import { LoginForm } from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadingSelector,
  isAuthenticatedSelector,
  userSelector,
} from '../../selectors/auth';
import { login } from '../../actions/auth';

export const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const handleSubmit = values => {
    const { email, password } = values;

    if (!email) {
      throw new SubmissionError({ email: 'Please enter a valid email' });
    } else if (!password) {
      throw new SubmissionError({ password: 'Please enter your password' });
    } else {
      dispatch(login(email, password));
    }
  };

  if (!loading && isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Paper>
      <LoginForm onSubmit={handleSubmit} />
    </Paper>
  );
};
