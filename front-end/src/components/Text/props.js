import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  flexGrow: PropTypes.bool,
};

export const defaultProps = {
  children: '',
  flexGrow: false,
};
