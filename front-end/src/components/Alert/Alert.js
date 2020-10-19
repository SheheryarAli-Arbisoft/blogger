import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomAlert } from './styled';
import { propTypes, defaultProps } from './props';
import { Slide } from '@material-ui/core';
import { openSelector, messageSelector } from '../../selectors/alert';
import { removeAlert } from '../../actions/alert';

const SlideTransition = ({ ...rest }) => {
  return <Slide {...rest} direction='up' />;
};

export const Alert = ({ vertical, horizontal }) => {
  const dispatch = useDispatch();

  const open = useSelector(openSelector);
  const message = useSelector(messageSelector);

  return (
    <CustomAlert
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={message}
      TransitionComponent={SlideTransition}
      autoHideDuration={3000}
      onClose={() => dispatch(removeAlert())}
    />
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
