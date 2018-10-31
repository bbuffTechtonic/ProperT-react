import React, { Component } from 'react';
import './App.css';
import Graph from './components/graph.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>

          </nav>
        </header>
        <main>
          <Graph />
        </main>
      </div>
    );
  }
}

export default App;
