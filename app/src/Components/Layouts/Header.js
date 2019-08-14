import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    textAlign: "right",
  },
  navLink: {
    marginRight: theme.spacing(2),
    fontWeight: 700,
    textDecoration: 'none',
    '&.active': {
      boxShadow: '0 3px 0 0 red'
    },
    '&:hover': {
      color: 'grey',
      textDecoration: 'none',
      boxShadow: '0 3px 0 0 red'
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar elevation="0" position="static" color="background">
        <Toolbar disableGutters={true}>
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <Typography color="secondary" variant="h6" className={classes.title}>
              <Link component={NavLink} className={classes.navLink} color="secondary" exact to="/">Rodney Martinez</Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <div className={classes.nav}>
                <Link component={NavLink} className={classes.navLink} color="secondary" exact to="/">Work</Link>
                <Link component={NavLink} className={classes.navLink} color="secondary" to="/about">About</Link>
                <Link component={NavLink} className={classes.navLink} color="secondary" to="/contact">Contact</Link>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}