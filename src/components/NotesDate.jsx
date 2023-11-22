import React from 'react';
import PropTypes from 'prop-types';

export default function NotesDate({ date }) {
  return <p className="card-date">{date}</p>;
}

NotesDate.propTypes = {
  date: PropTypes.string.isRequired,
};
