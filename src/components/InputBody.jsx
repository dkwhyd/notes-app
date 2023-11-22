import React from 'react';
import PropTypes from 'prop-types';

export default function InputBody({ value, handleChangeBody }) {
  {
    return (
      <label htmlFor="body" className="body">
        Message
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="5"
          value={value}
          onChange={handleChangeBody}
          placeholder="message"
        />
      </label>
    );
  }
}

InputBody.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeBody: PropTypes.func.isRequired,
};
