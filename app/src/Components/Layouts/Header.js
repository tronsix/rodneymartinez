import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Link,
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
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation="0" position="static" color="background">
        <Toolbar>
          <Container>
            <Grid
              container
              spacing={4}
              justify="center"
              alignItems="center"
            >
              <Grid item xs>
                <Typography color="secondary" variant="h6" className={classes.title}>
                  Rodney Martinez
                </Typography>
              </Grid>
              <Grid item xs>
                <div className={classes.nav}>
                  <Link color="secondary" className={classes.navLink}>Work</Link>
                  <Link color="secondary" className={classes.navLink}>About</Link>
                  <Link color="secondary" className={classes.navLink}>Contact</Link>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}