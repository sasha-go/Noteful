import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';
import AddNote from '../AddNote/AddNote';
import './Main.css'

class Main extends Component {
  render() {
    const { notes } = this.props;
    console.log('hi', this.props)

    return (
      <div className='Main'>
      {/* render list of notes and add delete button to each note */}
          <ul>
            {notes.map((note) => {
              return (<div key={note.id} className="note-box">
                <Link to={`notes/${note.id}`}>{note.name}</Link>
                <p>Date Modified on: {note.modified}</p>
                </div>)
                ;
                
            })}
          </ul>
        <AddNote />
      </div>
    )
  }
}

export default Main;


