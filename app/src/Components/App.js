import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from "react-router-dom";
import { Header, Footer } from './layouts';
import { Home, About, Contact } from './pages';
import { Container } from '@material-ui/core';

export default class App extends Component {

  render() {
    return (
      <Router>
          <Container>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </Container>
      </Router>
    );
  }
}