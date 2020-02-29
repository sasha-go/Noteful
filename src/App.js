import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import STORE from './STORE';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

// folders render in sidebar comp
// notes render in main

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <h1>
          <Link to={"/"}>Noteful</Link>
        </h1>
        <sidebar>
          <Switch>
            <Route
              path="/folder/:folder_id"
              render={(props) => <SideBar folders={STORE.folders} {...props}/>}
            />
            {/* <Route path="/">
              <Main folders={STORE.folders} />
            </Route> */}
          </Switch>
        </sidebar>
        
        <main>
          <Route 
            path="notes"
            render={(props) => <Main notes={STORE.notes} {...props}/>}
          />

        </main>

      {/* <main>
          <Switch>
            <Route path="/" component={Main}></Route>
            <Route path="/folders" component={SideBar}></Route>
            <Route path="/notes/:note" component={Notes}></Route>
          </Switch>
        </main> */}
        
       
      </div>
    );
  }
  
}

export default App;
