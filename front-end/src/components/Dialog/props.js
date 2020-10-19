import PropTypes from 'prop-types';

export const propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  maxWidth: PropTypes.string,
  fullWidth: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  keepMounted: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export const defaultProps = {
  open: false,
  maxWidth: 'sm',
  fullWidth: true,
  title: '',
  content: '',
  disableBackdropClick: true,
  disableEscapeKeyDown: true,
  keepMounted: true,
};
