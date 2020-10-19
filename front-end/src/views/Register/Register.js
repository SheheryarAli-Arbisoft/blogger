import React from 'react';
import { SubmissionError } from 'redux-form';
import { Paper } from '../../components/Paper';
import { RegisterForm } from './RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { name, email, password, cpassword } = values;

    if (!name) {
      throw new SubmissionError({ name: 'Please enter your name' });
    } else if (!email) {
      throw new SubmissionError({ email: 'Please enter a valid email' });
    } else if (!password) {
      throw new SubmissionError({ password: 'Please enter password' });
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

  return (
    <Paper>
      <RegisterForm onSubmit={handleSubmit} />
    </Paper>
  );
};
