import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormInputs from './formInput';
import Sidebar from './sidebar';
const styles = (theme) => ({
  '@global': {
    body: {
      ...theme.typography.body1,
    },
  },
});
export default function Form() {
  return (
    <Container
      maxWidth="lg"
      style={{
        background: '#A7D0D8',
        height: '1000px',
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
