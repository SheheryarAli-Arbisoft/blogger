import React from 'react';
import { CustomPaper } from './styled';
import { propTypes, defaultProps } from './props';

export const Paper = ({ children, ...rest }) => {
  return <CustomPaper {...rest}>{children}</CustomPaper>;
};

Paper.propTypes = propTypes;
Paper.defaultProps = defaultProps;
