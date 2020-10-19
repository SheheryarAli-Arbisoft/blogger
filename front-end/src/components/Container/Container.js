import React from 'react';
import { CustomContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const Container = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
