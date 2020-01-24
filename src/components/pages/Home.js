import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { ProjectCard } from '../modules'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
    root:{
        marginTop: '72px'
    },
    link:{
        
    }
}));

export const Home = (props) => {
    const classes = useStyles();

    return (
        <Grid
          container
          spacing={4}
          justify="center"
          alignItems="center"
          className={ classes.root }
        >
            {/* Contact input fields */}
            {props.data.map(({title, link, mainImage}, i) => (
                <Grid key={i} item xs={12} sm={6}>
                <Link to={ link } >
                  <ProjectCard 
                    title={ title }
                    image={ mainImage }
                  />
                </Link>
              </Grid>
            ))
            }
        </Grid>
      );
}
