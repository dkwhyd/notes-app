import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import store from './store';

import Notes from '../pages/Notes';
import NotesDetail from '../pages/NotesDetail';
import AddNote from '../pages/AddNote';
import Archive from '../pages/Archive';
import NotFound from '../components/NotFound';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <header className="nav">
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
        </header>
        <Routes>
          <Route path="/add" element={<AddNote />} />
          <Route path="/notes/detail/:id" element={<NotesDetail />} />
          <Route path="/archived" element={<Archive />} />
          <Route path="/" element={<Notes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
}
