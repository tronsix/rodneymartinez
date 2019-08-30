import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Projects as ProjectData } from './data';
import { Header, Footer } from './modules';
import { Home, About, Contact, Projects, NotFound } from './pages';
import { Container } from '@material-ui/core';

export const App = () => {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route 
            exact path="/" 
            render={ () => <Home data={ ProjectData }/> } 
            />
            <Redirect exact path="/projects" to="/" />
            <Route 
              path={ "/rd-onboarding" } 
              render={ () => <Projects data={ ProjectData[0].gridTiles } /> } 
            />
            <Route 
              path={ "/rd-website" } 
              render={ () => <Projects data={ ProjectData[1].gridTiles } /> } 
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