import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ProjectsData } from './components/data';
import { Header, Footer } from './components/modules';
import { Home, About, Contact, Projects, NotFound } from './components/pages';
import { Container } from '@material-ui/core';

export const App = () => {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route 
            exact path="/" 
            render={ () => <Home data={ ProjectsData }/> } 
            />
            <Redirect exact path="/projects" to="/" />
            <Route 
              path={ ProjectsData[0].link } 
              render={ () => <Projects data={ ProjectsData[0].gridTiles } /> } 
            />
            <Route 
              path={ ProjectsData[1].link } 
              render={ () => <Projects data={ ProjectsData[1].gridTiles } /> } 
            />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route component={ NotFound } />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
}