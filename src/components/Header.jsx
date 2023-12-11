import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Header() {
  return (
    <div className="nav">
      <h1>Notes App</h1>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/archived">Archived</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Note</NavLink>
        </li>
      </ul>
    </div>
  );
}
