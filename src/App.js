import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word'
import Color from './components/Color'


function App() {
  return (
    <div className="App">
      <Router >
        <Home path="/home"/>
        <Number path="/number/:id"/>
        <Word path= "/word/:id"/>
        <Color path= "/color/:id/:Id"/>
      </Router>
    </div>
  );
}

export default App;

