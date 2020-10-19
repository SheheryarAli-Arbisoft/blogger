import React from 'react';
import { CustomGrid } from './styled';
import { propTypes, defaultProps } from './props';

export const Grid = ({ children, ...rest }) => {
  return <CustomGrid {...rest}>{children}</CustomGrid>;
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
