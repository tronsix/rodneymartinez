import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { About, Contact, Home, NotFound, Projects, Resume } from './pages';

export default function Routes(props) {

    return (
        <Switch>
            <Redirect exact from="/home" to="/" />
            <Route path="/" exact render={(props) => <Home {...props} title="Home" /> } />
            <Route path="/about" exact render={(props) => <About {...props} title="About" /> } />
            <Route path="/contact" exact render={(props) => <Contact {...props} title="Contact" /> } />
            <Route path="/resume" exact render={(props) => <Resume {...props} title="Resume" /> } />
            <Route path="/not-found" exact render={(props) => <NotFound {...props} title="404" /> } />
            <Route path="/:link" render={(props) => <Projects {...props} title="Projects" /> } />
            <Redirect from="*" to="/not-found" />
        </Switch>
    )
}