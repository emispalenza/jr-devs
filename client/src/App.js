import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tecnologias from './components/Tecnologias';
import Quienes from './components/Quienes';
import NotFound from './components/NotFound';
import Back from './components/Back';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <h1 className="App-title">Jr-Dev</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/portfolio" component={ Portfolio } />
            <Route path="/tecnologias" component={ Tecnologias } />
            <Route path="/quienes" component={ Quienes } />
            <Route path="/api/test" component={ Back } />
            <Route path="" component={ NotFound } />           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
