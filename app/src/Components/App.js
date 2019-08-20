import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import { Header, Footer } from './modules';
import { Home, About, Contact, Projects, NotFound } from './pages';
import { Container } from '@material-ui/core';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/projects/:projectTitle" component={ Projects } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route component={ NotFound } />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}