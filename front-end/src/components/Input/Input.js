import React from 'react';
import { CustomInput } from './styled';
import { propTypes, defaultProps } from './props';

export const Input = ({ ...rest }) => {
  return <CustomInput {...rest} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
