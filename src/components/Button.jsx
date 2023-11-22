import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  value, type, onClick, styleName,
}) {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={styleName}
    />
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  styleName: PropTypes.string.isRequired,
};
