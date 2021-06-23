import React from "react"
import { gql } from 'graphql-request'
import { Query } from '../graphql/GraphCMS'
import Markdown from '../components/Markdown'

import { Layout } from "../components"
import { Typography, Grid, Button } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {},
  bioPic: {
    width: "100%",
    paddingBottom: 20,
  },
  divider: {
    backgroundColor: "#EFEFEF",
    height: "2px",
    width: "100%",
    margin: "24px 0",
  },
  svg: {
    fill: "none",
    height: "20px",
    width: "20px",
  },
  social: {
    padding: 0,
    borderRadius: "50%",
    minWidth: 40,
    height: 40,
    backgroundColor: "#0073b1",
    "&:hover": {
      backgroundColor: "#0084bf",
    },
  },
  linkedIn: {
    fill: theme.palette.background.default,
  },
  button: {
    margin: "28px 0",
    borderRadius: "0",
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({Bio: null});
  const name = 'Rodney Martinez';
  const { Bio } = state;

  const bioQuery = gql `
    query getBio($name: String!) {
      authors(where: {name: $name}){
        bio {
          markdown
        }
        picture {
          url
        }
        title
      }
    }
  `

  const handleResume = () => {
    props.history.push("/resume");
  };

  React.useEffect(() => {
    !Bio?.name && 
      Query(bioQuery, {name}).then(({ authors }) => {
        setState({Bio: {...authors[0], name }});
      })
  }, [bioQuery, name, Bio?.name]);

  return (
    <Layout scroll={false}>
      {Bio && 
        <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} sm={4} md={3}>
          <Grid container>
            <Grid item xs={12}>
              <img
                src={Bio.picture.url}
                alt="Rodney Martinez"
                className={classes.bioPic}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography children={Bio.title} color="secondary" variant="h6" />
              <Typography children="Education" color="secondary" variant="subtitle1" />
              <Typography color="secondary" variant="body2">
                <strong>BFA – Film Production</strong>
                <br />
                University of Colorado – Denver
                <br />
                <br />
                <strong>Front-end Web Development</strong>
                <br />
                General Assembly
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Markdown children={Bio.bio.markdown} />
          <Grid item xs={6}>
            <Button color="primary" className={classes.button} onClick={handleResume} variant="outlined">
              View Resume
            </Button>
          </Grid>
          <div className={classes.divider}></div>
          <Grid container>
            <Typography color="secondary" variant="h6">
              Social
            </Typography>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <a
                href="https://www.linkedin.com/in/rodneyamartinez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  size="small"
                  aria-label="add"
                  className={classes.social}
                >
                  <svg
                    id="Brands"
                    className={classes.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                  >
                    <defs></defs>
                    <title>linkedin</title>
                    <g id="linkedin">
                      <rect width="25" height="25" />
                      <path
                        className={classes.linkedIn}
                        d="M7,22.5H2.83V9.15H7ZM4.9,7.33a2.42,2.42,0,0,1,0-4.83,2.42,2.42,0,0,1,0,4.83ZM22.5,22.5H18.36V16c0-1.55,0-3.54-2.16-3.54s-2.48,1.69-2.48,3.43V22.5H9.57V9.15h4V11h.06a4.34,4.34,0,0,1,3.92-2.16c4.2,0,5,2.77,5,6.35V22.5Z"
                      />
                    </g>
                  </svg>
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      }
    </Layout>
  );
}
