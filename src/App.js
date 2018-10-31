import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.jsx';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header>
          <nav>

          </nav>
        </header>
        <main>
          <Dashboard />
          {/* <Graph /> */}
        </main>
      </div>
    );
  }

}

export default App;
