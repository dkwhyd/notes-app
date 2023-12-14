import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, onClick, styleName }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button value={value} onClick={onClick} className={styleName}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  styleName: PropTypes.string.isRequired,
};
