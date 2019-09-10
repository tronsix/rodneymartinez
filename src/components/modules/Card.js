import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card 
    elevation = { 0 } 
    className = { classes.card } 
    >
      <CardMedia
        className = { classes.media }
        image = { props.image }
        title = { props.title }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { props.copy }
        </Typography>
      </CardContent>
    </Card>
  );
}