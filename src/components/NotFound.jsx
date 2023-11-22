import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3> Pages not found </h3>
      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
}
