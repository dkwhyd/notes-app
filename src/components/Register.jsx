import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api/network-data';
import SwitchTheme from './SwitchTheme';

export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register({ ...userData }).then((response) => {
      if (response.error === false) {
        navigate('/login');
      }
      console.log(response);
    });
  };

  return (
    <div>
      <div className="Register">
        <h2>Register</h2>
        <SwitchTheme />
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              required
              autoComplete="off"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              autoComplete="off"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>
          <button className="submit" style={{ margin: 0 }} type="submit">
            Register
          </button>
          <p>
            Sudah punya akun?
            <Link className="suggestion" to="/login">
              Masuk
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
