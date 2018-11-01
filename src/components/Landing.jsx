import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function Landing({ isLoggedIn, handleSuccessfulLogin }) {
  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <Login handleSuccessfulLogin={handleSuccessfulLogin} />;
}

export default Landing;
