import React from 'react';

import Container from '@material-ui/core/Container';

import { Header, Footer } from './';

export default function Layout(props) {
    return (
        <Container>
            <Header />
            {props.children}
            <Footer />
        </Container>
    );
}