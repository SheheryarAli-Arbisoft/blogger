import PropTypes from 'prop-types';

export const propTypes = {
  variant: PropTypes.string,
  raised: PropTypes.bool,
  blog: PropTypes.object.isRequired,
};

export const defaultProps = {
  variant: 'outlined',
  raised: true,
};
