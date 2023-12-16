import React from 'react';
import PropTypes from 'prop-types';

import GuardRoute from './GuardRoute';
import Header from './Header';

export default function Layout({ element }) {
  return (
    <>
      <Header />
      <GuardRoute element={element} />
    </>
  );
}

Layout.propTypes = {
  element: PropTypes.node.isRequired,
};
