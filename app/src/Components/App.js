import React, { Component, Fragment } from 'react'
import { Header, Footer, CardGrid } from './layouts'
import { Container } from '@material-ui/core';

export default class extends Component {

  render() {
    return <Fragment>
      <Header />
      <Container>
        <CardGrid />
      </Container>
      <Footer />
    </Fragment>
  }
}