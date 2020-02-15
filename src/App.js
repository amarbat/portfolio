import React from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import About from "./About/About"
import Contact from "./Contact/Contact"
import AppFooter from "./AppFooter"

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink activeClassName='active-link' to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active-link' to='/contact'>
          Contact
        </NavLink>
      </nav>

      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <AppFooter/>
    </div>
  );
}

export default App;
