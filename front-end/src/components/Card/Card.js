import React, { Fragment, useState } from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { CustomCard } from './styled';
import { propTypes, defaultProps } from './props';
import { CardContent, CardActions } from '@material-ui/core';
import { Text } from '../Text';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { deleteBlog } from '../../actions/blog';

export const Card = ({ blog, showActions, ...rest }) => {
  const { id, title, timestamp, description } = blog;

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    dispatch(deleteBlog(id));
    setOpen(false);
  };

  return (
    <CustomCard {...rest}>
      <CardContent>
        <Text variant='h4' noWrap>
          {title}
        </Text>
        <Text noWrap>
          Created on {<Moment format='DD-MMM-YYYY'>{timestamp}</Moment>},{' '}
          {<Moment format='hh:mm a'>{timestamp}</Moment>}
        </Text>
        <Text color='textSecondary' variant='body2' noWrap>
          {description}
        </Text>
      </CardContent>
      {showActions && (
        <Fragment>
          <CardActions>
            <Button variant='outlined' color='secondary'>
              <i className='fas fa-pencil-alt' />
              Edit
            </Button>
            <Button variant='outlined' onClick={() => setOpen(true)}>
              <i className='fas fa-trash' />
              Delete
            </Button>
          </CardActions>
          <Dialog
            title='Confirm'
            content='Are you sure you want to delete this blog? You will not be able to undo this action!'
            open={open}
            onClose={handleClose}
            onConfirm={handleConfirm}
          />
        </Fragment>
      )}
    </CustomCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
