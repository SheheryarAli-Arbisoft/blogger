import React from 'react';
import { CustomGridItem } from './styled';
import { propTypes, defaultProps } from './props';

export const GridItem = ({ children, ...rest }) => {
  return (
    <CustomGridItem item {...rest}>
      {children}
    </CustomGridItem>
  );
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;
