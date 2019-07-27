import React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';


const Nav = () => {
    return (
        <div>
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection align='start' role='toolbar'>
                        <div>
                            <img src="%PUBLIC_URL%/assets/rd-horizontal-logo+wordmark+invest-with-control-fullcolor@0.5x.png"/>
                        </div>
                    </TopAppBarSection>
                    <TopAppBarSection align='end' role='toolbar'>
                        <ul className="navList">
                            <li className="navListItem"><a className="navListLink mdc-typography--button" href="/">Work</a></li>
                            <li className="navListItem"><a className="navListLink mdc-typography--button" href="/about.html">About</a></li>
                            <li className="navListItem"><a className="navListLink mdc-typography--button" href="/contact.html">Contact</a></li>
                        </ul>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        </div>
    );
}

export default Nav;