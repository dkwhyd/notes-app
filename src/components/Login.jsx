import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/network-data';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
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

    login({ ...userData }).then((response) => {
      console.log(response);

      if (response.error === false) {
        alert('login successfull');
        dispatch({
          type: 'USER_LOGIN',
          token: response.data,
        });
        navigate('/');
      }
    });
  };

  return (
    <div>
      <div className="Login">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="register-form">
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
              required
              autoComplete="off"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>
          <button className="submit" style={{ margin: 0 }} type="submit">
            Login
          </button>
          <p>
            Belum punya akun?
            <Link className="suggestion" to="/register">
              Daftar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
