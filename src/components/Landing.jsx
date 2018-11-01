import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function Landing({ isLoggedIn }) {
  // if (isLoggedIn) {
    return <Dashboard />;
  // }
  // return <Login />;
}

export default Landing;
