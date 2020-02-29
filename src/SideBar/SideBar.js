import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddFolder from '../AddFolder/AddFolder';
import Main from '../Main/Main';
import './SideBar.css'


class SideBar extends Component {
  render() {
    const { folders } = this.props;
    const selectedId = this.props.match.params.folderId;
    const filteredNotes = this.props.notes.filter(note => note.folderId === selectedId);

    return (
      <>
        <div className='SideBar'>
          <ul>
            {folders.map((folder) => {
              return (<li key={folder.id} className={`${selectedId === folder.id ? "selected-class" : ""}`}><NavLink to={`/folder/${folder.id}`}>{folder.name}</NavLink></li>);
            })}
          </ul>
          {/* probably have to add an Add Folder button here and AddFolder component is the actual form */}

          <AddFolder />
        </div>
        <Main notes={filteredNotes}/>
      </>
    )
  }
}

export default SideBar;
