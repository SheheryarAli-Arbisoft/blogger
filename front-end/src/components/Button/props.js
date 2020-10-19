import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export const defaultProps = {
  color: 'inherit',
  variant: 'text',
  size: 'medium',
};
