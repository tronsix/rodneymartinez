import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core';
import { ProjectCard } from './Card'

const useStyles = makeStyles(theme => ({
 root:{
  paddingTop: '72px'
 },

}));

export const CardGrid = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      justify="center"
      alignItems="center"
      className={ classes.root }
    >
      <Grid item xs>
        <Link to="/projects/project-1">
          <ProjectCard />
        </Link>
      </Grid>
      <Grid item xs>
        <Link to="/projects/project-2">
          <ProjectCard />
        </Link>
      </Grid>
    </Grid>
  );

}