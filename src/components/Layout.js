import React from 'react';

import Container from '@material-ui/core/Container';

import { Header, ScrollToTop, Footer } from './';

export default function Layout(props) {
    Layout.defaultProps = { scroll: true };
    return (
        <Container>
            <Header />
            {props.children}
            {props.scroll && <ScrollToTop />}
            <Footer />
        </Container>
    );
}