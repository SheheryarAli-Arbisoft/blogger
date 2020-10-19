import React from 'react';
import { CustomText } from './styled';
import { propTypes, defaultProps } from './props';

export const Text = ({ children, ...rest }) => {
  return <CustomText {...rest}>{children}</CustomText>;
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
