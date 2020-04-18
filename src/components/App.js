import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../routes/Router'

import '../assets/styles/App.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Route path = '/' component = {Home}/>
      </header>
    </div>
    </Router>
  );
}

export default App;
