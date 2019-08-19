import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { ContactForm } from '../layouts';

export default class Contact extends Component {

    state = {
        
    };

    render() {

        return (
            <Container maxWidth="sm">
                <ContactForm />
            </Container>
        );
    }
}