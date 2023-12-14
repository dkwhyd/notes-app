import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';

export default function Header() {
  const [me, setMe] = useState();
  const accessToken = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          'https://notes-api.dicoding.dev/v1/users/me',
          {
            headers: {
              Authorization: `Bearer ${accessToken || null}`,
            },
          },
        );
        if (result.data.status === 'success') {
          setMe(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="nav">
      <h1>Notes App</h1>
      <div className="setting">
        <div className="user">
          {me ? (
            <div>
              <FaUser />
              {me.name}
            </div>
          ) : null}
        </div>
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
