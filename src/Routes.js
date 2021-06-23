import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { About, Contact, Home, NotFound, Project, Resume } from './pages';

export default function Routes(props) {

    return (
        <Switch>
            <Redirect exact from="/home" to="/" />
            <Route path="/" exact render={(props) => <Home {...props} title="Home" /> } />
            <Route path="/about" exact render={(props) => <About {...props} title="About" /> } />
            <Route path="/contact" exact render={(props) => <Contact {...props} title="Contact" /> } />
            <Route path="/resume" exact render={(props) => <Resume {...props} title="Resume" /> } />
            <Route path="/not-found" exact render={(props) => <NotFound {...props} title="404" /> } />
            <Route path="/:slug" render={(props) => <Project {...props} title="Project" /> } />
            <Redirect from="*" to="/not-found" />
        </Switch>
    )
}