import React from 'react';
import PropTypes from 'prop-types';

export default function InputTitle({ value, handleChangeTitle }) {
  return (
    <label htmlFor="title" className="title">
      Title
      <input
        id="title"
        type="text"
        placeholder="title"
        value={value}
        onChange={handleChangeTitle}
      />
    </label>
  );
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
};
