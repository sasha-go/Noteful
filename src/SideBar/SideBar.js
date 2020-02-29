import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddFolder from '../AddFolder/AddFolder';
import './SideBar.css'


class SideBar extends Component {
  render() {
    const { folders } = this.props;

    return (
      <div className='SideBar'>
        <ul>
          {folders.map((folder) => {
            return (<li><NavLink to={`/folder/${folder.id}`} activeClassName="active-folder">{folder.name}</NavLink></li>);
          })}
        </ul>

        <AddFolder />
      </div>
    )
  }
}

export default SideBar;
