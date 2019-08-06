import React, { Component, Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from "react-router-dom";
import { Header, Footer } from './layouts';
import { Home, About, Contact } from './pages';
import { Container } from '@material-ui/core';

export default class extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Container>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Footer />
          </Container>
        </Fragment>
      </Router>
    );
  }
}