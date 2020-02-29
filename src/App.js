import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import STORE from './STORE';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>
          <Link to={"/"}>Noteful</Link>
        </h1>
          <Switch>
            <Route 
                path="/folder/:folderId"
                render={(props) => <SideBar folders={STORE.folders}
                notes={STORE.notes}
                {...props} />}
              />
            <Route
                exact path="/"
                render={(props) => <SideBar folders={STORE.folders}
                notes={STORE.notes}
                {...props} />}
              />
          </Switch>
        
      </div>
    );
  }
  
}

export default App;

