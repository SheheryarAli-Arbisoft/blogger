import React from 'react';
import { SubmissionError } from 'redux-form';
import { Paper } from '../../components/Paper';
import { LoginForm } from './LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { email, password } = values;

    if (!email) {
      throw new SubmissionError({ email: 'Please enter a valid email' });
    } else if (!password) {
      throw new SubmissionError({ password: 'Please enter password' });
    } else {
      dispatch(login(email, password));
    }
  };

  return (
    <Paper>
      <LoginForm onSubmit={handleSubmit} />
    </Paper>
  );
};
