import React from 'react'
import { gql } from 'graphql-request'
import { Query } from '../graphql/GraphCMS'

import Grid from '@material-ui/core/Grid'
import { Layout, ProjectCard } from '../components'

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    margin: "48px 0 48px",
    borderRadius: '0',
    border: '2px solid',
    '&:hover': {
      border: '2px solid',
    }
  },
}));

const initialState = {
  projects: []
}

export default function Home(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(initialState);
  const { projects } = state;
  const projectsQuery = gql`
  { 
      projects {
        id
        slug
        title
        coverImage {
          alt
          url
        }
        workedOn
      }
    }
  `

  const navToProject = ({id, slug, title, coverImage}) => {
    props.history.push({
      pathname: `/${slug}`,
      state: {
        title,
        coverImage
      },
    })
  }

  React.useEffect(() => {
    Query(projectsQuery).then(data => {
      setState(data);
    });
  },[projectsQuery])

  return (
    <Layout title={props.title}>
      <Grid
        container
        spacing={4}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {/* Contact input fields */}
        {projects.map(({ slug, title, coverImage, id}) => (
          <Grid key={id} item xs={12} sm={12} md={6}>
            <div onClick={() => navToProject({slug, title, coverImage})}>
              <ProjectCard title={title} image={coverImage.url} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
