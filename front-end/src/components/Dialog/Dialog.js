import React from 'react';
import { CustomDialog } from './styled';
import { propTypes, defaultProps } from './props';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from '@material-ui/core';
import { Button } from '../Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const Dialog = ({
  title,
  content,
  open,
  onClose,
  onConfirm,
  ...rest
}) => {
  return (
    <CustomDialog open={open} TransitionComponent={Transition} {...rest}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>
        <Button autoFocus variant='outlined' onClick={onClose}>
          Close
        </Button>
        <Button color='primary' variant='contained' onClick={onConfirm}>
          Ok
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
