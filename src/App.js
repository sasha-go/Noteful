import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import STORE from './STORE';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

class App extends Component {
  constructor(props) {
    super(props);
    state = {
      
    }
  }

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
              {...props}/>}
            />
          <Route
              exact path="/"
              render={(props) => <SideBar folders={STORE.folders}/>}
            />
          </Switch>
        
        <main>
          <Route 
            path="/"
            render={(props) => <Main notes={STORE.notes} {...props}/>}
          />

        </main>
        
       
      </div>
    );
  }
  
}

export default App;

// Routing - how to get SideBar and Main/notes to show up on '/' route?

// How to get Notes to populate based on which folder is clicked - how to connect sidebar to main?

