import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Coach Website
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Über mich</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">Kontakt</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
