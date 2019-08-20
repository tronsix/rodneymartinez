import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link as StyledLink
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
  titleLink: {
    fontWeight: 700,
    textDecoration: 'none',
    '&:hover': {
      color: 'grey',
      textDecoration: 'none',
    },
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

export const Header = () => {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar elevation={0} position="static" color="inherit">
        <Toolbar disableGutters={true}>
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <Typography color="secondary" variant="h6" className={classes.title}>
              <StyledLink component={Link} className={classes.titleLink} color="secondary" to="/">Rodney Martinez</StyledLink>
              </Typography>
            </Grid>
            <Grid item xs>
              <div className={classes.nav}>
                <StyledLink component={NavLink} className={classes.navLink} color="secondary" to="/">Work</StyledLink>
                <StyledLink component={NavLink} className={classes.navLink} color="secondary" to="/about">About</StyledLink>
                <StyledLink component={NavLink} className={classes.navLink} color="secondary" to="/contact">Contact</StyledLink>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}