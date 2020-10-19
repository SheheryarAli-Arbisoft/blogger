import React from 'react';
import { Grid, GridItem } from '../../components/Grid';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Dashboard = () => {
  return (
    <Grid>
      <GridItem xs={12}>
        <Button color='primary' size='large' variant='contained'>
          Create new blog
        </Button>
      </GridItem>
      <GridItem xs={12}>
        <Input label='Search' />
      </GridItem>
    </Grid>
  );
};
