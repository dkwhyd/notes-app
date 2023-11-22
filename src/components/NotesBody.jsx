import React from 'react';
import PropTypes from 'prop-types';

export default function NotesBody({ body }) {
  return <p className="card-body">{body}</p>;
}

NotesBody.propTypes = {
  body: PropTypes.string.isRequired,
};
