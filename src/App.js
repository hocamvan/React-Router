import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import History from './History';
import Produit from './Produit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <div>
            <NavLink exact to="/" activeClassName="selected"> Accueil </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
