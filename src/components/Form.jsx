import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import FormInputs from './formInput';
import Sidebar from './sidebar';

export default function Form() {
  return (
    <Container
      style={{
        padding: 50,
      }}>
      <Typography variant="h3" align="center">
        Contact us
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <FormInputs />
        </Grid>
      </Grid>
    </Container>
  );
}
