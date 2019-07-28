import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography,
  Link
} from '@material-ui/core';
export default props =>

  <AppBar position="static" color="#FFFFFF">
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Rodney Martinez
      </Typography>
      <Typography variant="h6" color="inherit">
        <Link>Work</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Typography>
    </Toolbar>
  </AppBar>

