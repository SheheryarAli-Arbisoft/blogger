import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  flexGrow: PropTypes.bool,
  variant: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
};

export const defaultProps = {
  children: '',
  flexGrow: false,
  variant: 'body1',
  align: 'inherit',
  color: 'inherit',
  bold: false,
};
