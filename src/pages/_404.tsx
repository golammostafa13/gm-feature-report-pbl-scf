import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {purple} from '@mui/material/colors';
import {Link} from "react-router-dom";
import {topBarStyle} from "../theme/customStyles/layoutStyles";

const primary = purple[500];

export default function _404() {
  return (
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh',
            mt: `-${topBarStyle.height}`,
            backgroundColor: primary,
          }}
      >
        <Typography variant="h1" style={{color: 'white'}}>
          404
        </Typography>
        <Typography variant="h6" style={{color: 'white'}}>
          The page you are looking for does not exist.
        </Typography>
        <Link to={'/dashboard'}>
          <Button variant="contained">Back Home</Button>
        </Link>
      </Box>
  );
}