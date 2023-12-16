import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './store';

import Notes from '../pages/Notes';
import NotesDetail from '../pages/NotesDetail';
import AddNote from '../pages/AddNote';
import Archive from '../pages/Archive';
import NotFound from '../components/NotFound';
import Register from '../components/Register';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Logout from '../components/logout';
import { ThemeProvider } from '../components/ThemeContext';

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Provider store={store}>
          <Routes>
            <Route
              path="/notes/add"
              element={<Layout element={<AddNote />} />}
            />
            <Route
              path="/notes/detail/:id"
              element={<Layout element={<NotesDetail />} />}
            />
            <Route
              path="/notes/archived"
              element={<Layout element={<Archive />} />}
            />
            <Route path="/" element={<Layout element={<Notes />} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            {/* <Route path="/" element={<Navigate to="/notes" />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
