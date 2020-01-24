import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import AppContext from './providers/AppContext';
import Routes from './Routes';

export default function App() {
    return (
      <Router forceRefresh={true}>
        <AppContext>
          <Routes />
        </AppContext>
      </Router>
    );
}