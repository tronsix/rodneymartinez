import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid
} from '@material-ui/core';
import { ProjectCard } from './Card'

// Styles
const styles = {
 root:{
  marginTop: '72px'
 },
 link:{
   
 }
};

// Variables
const indexURL = "/";
const assetsURL = "/assets/";
const publicURL = process.env.PUBLIC_URL;

class CardGrid extends Component {

  state = {
    projectCards: [
      {
        title: "rd-website",
        get link() {
          return indexURL + this.title;
        },
        image: publicURL + assetsURL + "project-1.png",
        copy: "This is project 1"
      },
      {
        title: "rd-onboarding",
        get link(){
          return indexURL + this.title;
        },
        image: publicURL + assetsURL + "project-1.png",
        copy: "This is project 2"
      }
    ]
  }

  render () {
    return (
      <Grid
        container
        spacing={4}
        justify="center"
        alignItems="center"
        className={ this.props.classes.root }
      >
          {/* Contact input fields */}
          {this.state.projectCards.map(card =>
          <Grid key={card.title} item xs={6}>
            <Link to={ card.link } >
              <ProjectCard 
                title={ card.title }
                image={ card.image }
                copy={ card.copy }
              />
            </Link>
          </Grid>
          )}
      </Grid>
    );
  }
}

export default withStyles(styles)(CardGrid);