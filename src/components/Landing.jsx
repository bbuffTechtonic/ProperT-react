import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Login from './Login';

function Landing({ isLoggedIn, handleSuccessfulLogin, landlord1 }) {
  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <Login handleSuccessfulLogin={handleSuccessfulLogin} landlord1={landlord1} />;
}

Landing.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleSuccessfulLogin: PropTypes.func.isRequired,
  landlord1: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Landing;
