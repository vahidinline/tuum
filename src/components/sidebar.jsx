import React from 'react';
import { Grid, Typography } from '@mui/material';

const Sidebar = () => {
  return (
    <Grid>
      <Grid style={{ margin: 5 }}>
        <Typography variant="h6">Media enquiries:</Typography>
        <Typography variant="body" color="#616161">
          press@tuumplatform.com
        </Typography>
      </Grid>
      <Grid style={{ margin: 5, paddingTop: 5 }}>
        <Typography variant="h6">Career questions:</Typography>
        <Typography variant="body" color="#616161">
          careers@tuumplatform.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
