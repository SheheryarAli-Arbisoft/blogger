import React from 'react';
import { CustomCard } from './styled';
import { propTypes, defaultProps } from './props';
import { CardContent, Typography } from '@material-ui/core';
import { Text } from '../Text';

export const Card = ({ ...rest }) => {
  return (
    <CustomCard>
      <CardContent>
        <Text variant='h4' gutterBottom>
          Blog Title
        </Text>
        <Text color='textSecondary' noWrap>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          laudantium id debitis officia possimus animi corporis architecto
          itaque ipsa modi doloribus nemo, aperiam libero voluptatum aut
          laboriosam laborum veniam, atque perferendis ipsam incidunt quod,
          porro impedit. Dolorum vero nobis ea quibusdam ducimus porro sed
          velit, et error placeat laudantium non, cumque alias quae laborum est
          culpa consequuntur voluptates fugiat totam! Eveniet, ab id doloremque,
          quasi earum quis esse illum dolorem sed iusto, repellat sit eos
          officiis sapiente deleniti vitae sequi vel? Fuga, atque neque quae
          rerum impedit possimus molestiae illo nihil incidunt perspiciatis.
          Numquam suscipit beatae molestiae laborum quos vel.
        </Text>
      </CardContent>
    </CustomCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
