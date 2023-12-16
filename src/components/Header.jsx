import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import SwitchTheme from './SwitchTheme';

export default function Header() {
  return (
    <div className="nav">
      <h1>Notes App</h1>

      <div className="setting">
        <SwitchTheme />
        <div className="logout">
          <Link to="/logout">Logout</Link>
        </div>
      </div>

      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/notes/archived">Archived</NavLink>
        </li>
        <li>
          <NavLink to="/notes/add">Add Note</NavLink>
        </li>
      </ul>
    </div>
  );
}
