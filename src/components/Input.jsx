import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  label,
  value,
  type,
  placeholder,
  handleChange,
}) {
  return (
    <label htmlFor="input">
      {label}
      <input
        type={type}
        id="input"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
