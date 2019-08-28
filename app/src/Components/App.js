import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { RDOnboarding, RDWebsite } from './data';
import { Header, Footer } from './modules';
import { Home, About, Contact, Projects, NotFound } from './pages';
import { Container } from '@material-ui/core';

export const App = () => {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Redirect exact path="/projects" to="/" />
            <Route 
              path={ "/rd-onboarding" } 
              render={ () => <Projects data={ RDOnboarding } /> } 
            />
            <Route 
              path={ "/rd-website" } 
              render={ () => <Projects data={ RDWebsite } /> } 
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