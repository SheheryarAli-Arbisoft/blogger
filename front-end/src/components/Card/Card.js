import React from 'react';
import Moment from 'react-moment';
import { CustomCard } from './styled';
import { propTypes, defaultProps } from './props';
import { CardContent, CardActions } from '@material-ui/core';
import { Text } from '../Text';
import { Button } from '../Button';

export const Card = ({ blog, showActions, ...rest }) => {
  const { title, timestamp, description } = blog;

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
        <CardActions>
          <Button variant='outlined' color='secondary'>
            <i className='fas fa-pencil-alt' />
            Edit
          </Button>
          <Button variant='outlined'>
            <i className='fas fa-trash' />
            Delete
          </Button>
        </CardActions>
      )}
    </CustomCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
