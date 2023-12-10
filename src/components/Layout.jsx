import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ element }) {
  return (
    <>
      <Header />
      {element}
    </>
  );
}

Layout.propTypes = {
  element: PropTypes.node.isRequired,
};
