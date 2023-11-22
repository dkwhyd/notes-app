import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NotesTitle({ title, id }) {
  return (
    <h3 className="card-title">
      <Link to={`/notes/detail/${id}`}>{title}</Link>
    </h3>
  );
}

NotesTitle.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
