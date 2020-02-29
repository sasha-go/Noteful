import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Folders extends Component {
  render() {
		const { folders } = this.props;

    return (
      <div className='Folders'>
				<ul>
					{folders.map((folder) => {
					return (<li><NavLink to={`/folder/${folder.id}`} activeClassName="active-folder">{folder.name}</NavLink></li>);
					})}
				</ul> 
      </div>
    )
  }
}

export default Folders;
