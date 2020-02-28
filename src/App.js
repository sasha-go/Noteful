import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import STORE from './STORE';
import MainRoute from './MainRoute/MainRoute';
import SideBarRoute from './SideBarRoute/SideBarRoute';
import NoteRoute from './NoteRoute/NoteRoute';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header>
          <Link to={"/"}>Noteful</Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={MainRoute}></Route>
            <Route exact path="/folders" component={SideBarRoute}></Route>
            <Route exact path="/notes/:note" component={NoteRoute}></Route>
          </Switch>
        </main>
        <sidebar>
          <Switch>
            <Route></Route>
  
          </Switch>
        </sidebar>
        
       
      </div>
    );
  }
  
}

export default App;
