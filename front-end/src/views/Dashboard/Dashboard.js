import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '../../components/Grid';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Dashboard = () => {
  return (
    <Grid>
      <GridItem xs={12} rtl>
        <Link to='/create-blog'>
          <Button color='primary' size='large' variant='contained'>
            Create new blog
          </Button>
        </Link>
      </GridItem>
      <GridItem xs={12}>
        <Input label='Search' />
      </GridItem>
    </Grid>
  );
};
