import React from "react"
import { useParams } from "react-router-dom"
import { gql } from "graphql-request"
import { Query } from "../graphql/GraphCMS"

import { CoverImage, Layout, Markdown } from "../components"
import { Grid, Typography } from "@material-ui/core"

import makeStyles from "@material-ui/styles/makeStyles"

// Styles
const usestyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  container: {
    justifyContent: "center",
  },
  gridItem: {
    maxWidth: 480,
    maxHeight: "auto",
  },
  placeholder: {
    backgroundColor: "#efefef",
    width: "100%",
    height: "100%",
  },
  button: {
    margin: "48px 0 48px",
    borderRadius: "0",
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
    },
  },
}));

export default function Project(props) {
  const classes = usestyles();
  let { slug } = useParams();
  const [state, setState] = React.useState({Project: null});
  const { Project } = state;
  const {title, coverImage} = props.history.location.state;

  const projectQuery = gql`
    query getProject($slug: String!) {
    project(where: {slug: $slug}) {
      id
      content {
        markdown
      }
    }
    }
  `

  React.useEffect(() => {
    Query(projectQuery, { slug }).then(({ project }) => {
      project !== null ? (
        setState({ Project: { ...project, title, coverImage }})
      ) : props.history.push('/not-found');
    });
  }, [ projectQuery, slug, title, coverImage, props.history, Project?.id ]);

  return (
    <Layout>
      <Grid container className={classes.container} spacing={2}>
        {Project && 
        <Grid item xs={8}>
          <Typography align="center" children={Project.title} variant="h2" />
          <CoverImage alt={Project.coverImage.alt} url={Project.coverImage.url} />
          <Markdown children={Project.content.markdown} />
        </Grid>
        }
      </Grid>
    </Layout>
  );
}
