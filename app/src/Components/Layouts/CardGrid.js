import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
} from '@material-ui/core';
import Card from './Card'

const useStyles = makeStyles(theme => ({
 root:{
  paddingTop: '72px'
 },

}));

export default function CardGrid() {
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
        <Card />
      </Grid>
      <Grid item xs>
        <Card />
      </Grid>
    </Grid>

  );
}