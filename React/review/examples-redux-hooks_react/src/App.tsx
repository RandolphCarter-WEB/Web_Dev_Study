import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import { Fetch } from './components/Fetch';
import { Hooks } from './components/Hooks';
import { LinksRouter } from './components/LinksRouter';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <LinksRouter />
          <Hooks />
          <Fetch />
        </header>
      </div>
    </Router>
  );
}

export default App;
