import React from 'react';
import PropTypes from 'prop-types';

export default function InputCheckbox({ value, onChange }) {
  return (
    <label htmlFor="myCheckbox">
      <input
        type="checkbox"
        id="myCheckbox"
        checked={value}
        onChange={onChange}
      />
      Archive
    </label>
  );
}

InputCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
