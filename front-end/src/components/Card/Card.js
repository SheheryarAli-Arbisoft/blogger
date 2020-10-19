import React from 'react';
import Moment from 'react-moment';
import { CustomCard } from './styled';
import { propTypes, defaultProps } from './props';
import { CardContent } from '@material-ui/core';
import { Text } from '../Text';

export const Card = ({ blog, ...rest }) => {
  const { title, timestamp, description } = blog;

  return (
    <CustomCard {...rest}>
      <CardContent>
        <Text variant='h4'>{title}</Text>
        <Text>
          Created on {<Moment format='DD-MMM-YYYY'>{timestamp}</Moment>},{' '}
          {<Moment format='hh:mm a'>{timestamp}</Moment>}
        </Text>
        <Text color='textSecondary' variant='body2' noWrap>
          {description}
        </Text>
      </CardContent>
    </CustomCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
