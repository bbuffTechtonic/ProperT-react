import React from 'react';
import { Graph } from './Graph.jsx';
import { Money } from './Money.jsx';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    totExpenses: '10,000.00',
    totIncome: '20,000.00',
    totProfit: '10,000.00'}

  }

  render() {
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>
        <Graph />
        <Money totIncome = {this.state.totIncome} totExpenses = {this.state.totExpenses} totProfit = {this.state.totProfit} />
      </section>
    );
  }
}

export default Dashboard;
