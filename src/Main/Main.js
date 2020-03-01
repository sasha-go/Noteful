import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddFolder from '../AddFolder/AddFolder';
import NoteList from '../NoteList/NoteList';
import './Main.css'


class Main extends Component {

  render() {
    const { folders } = this.props;
    const selectedId = this.props.match.params.folderId;
    const filteredNotes = this.props.notes.filter(note => note.folderId === selectedId);
    const defaultNotes = this.props.notes;

    return (
      <>
        <div className='Main'>
          <ul>
            {folders.map((folder) => {
              return (
              <li 
                key={folder.id} 
                className={`${selectedId === folder.id ? "selected-class" : ""}`}>
                <NavLink 
                  to={`/folder/${folder.id}`}>{folder.name}
                </NavLink>
              </li>);
            })}
          </ul>

          {/* probably have to add an Add Folder button here and AddFolder component is the actual form */}

          <AddFolder />
        </div>
        {/* <NoteList notes={defaultNotes} onChange={filteredNotes}/> */}

        <NoteList notes={filteredNotes}/>
      </>
    )
  }
}

export default Main;
