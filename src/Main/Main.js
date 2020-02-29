import React, { Component } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote';
import AddNote from '../AddNote/AddNote';
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className='Main'>
      {/* render list of notes and add delete button to each note */}
          <p>I am in Main</p>
        <AddNote />
      </div>
    )
  }
}

export default Main;


