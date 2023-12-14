import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function GuardRoute({ element }) {
  const accessToken = useSelector((state) => state.auth);
  // console.log(accessToken);
  return accessToken ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
}

GuardRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
