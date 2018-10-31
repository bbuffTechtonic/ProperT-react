import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing'
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

const store = require('store');

class App extends Component {
  constructor() {
    super();
    this.state = {
      fiscalYear: Date.now(),
      rentals: [],
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.hydrateStateWithStore();
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      'beforeunload',
      this.saveStateToStore.bind(this),
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToStore.bind(this),
    );

    // saves if component has a chance to unmount
    this.saveStateToStore();
  }

  hydrateStateWithStore() {
    // var address = {
    //   address1: '123 Elm St.',
    //   address2: '#305',
    //   city: 'Denver',
    //   state: 'CO',
    //   zip: 80209
    // };
    
    // var tenantInfo = {
    //   firstName: "Maggie",
    //   lastName: "Brown",
    //   email: "maggie@abc.org",
    //   monthlyRent: 1750,
    //   leaseStart: "6/1/2018",
    //   leaseEnd: "5/31/2019"
    // };
    // //
    // // //Expense Object
    // var expenses = {
    //   mileage: [
    //     {
    //       date: "7/5/2018",
    //       amount: 25,
    //       description: "Miles driven"
    //     },
    //     {
    //       date: "8/18/2018",
    //       amount: 25,
    //       description: "Miles driven"
    //     }
    //   ],
    //   mortgage: {
    //     premium: 1700,
    //     escrow: 800,
    //     interest: 85,
    //     mortgageIns: 100
    //   },
    //   maintenance: [
    //     {
    //       date: "7/18/2018",
    //       description:"cleaning",
    //       amount:160,
    //       image:"../images/receipt.jpg"
    //     }
    //   ],
    //   suppliesGoods: [
    //     {
    //       date: "9/01/2018",
    //       description:"bathroom cleaning supplies",
    //       amount:25,
    //       image:"../images/receipt.jpg"
    //     }
    //   ],
    //   misc: [
    //     {
    //       date: "7/18/2018",
    //       description:"painting living room wall",
    //       amount:800,
    //       image:"../images/receipt.jpg"
    //     }
    //   ],
    //   hoa: [
    //     {
    //       date: "6/1/2018",
    //       amount: 50
    //     }
    //   ],
    //   rent: [
    //     {
    //       date: "6/5/2018",
    //       amount: 1750
    //     },
    //     {
    //       date: "7/2/2018",
    //       amount: 1750
    //     },
    //     {
    //       date: "8/5/2018",
    //       amount: 1750
    //     }
    //   ]
    // };
    // var newProp = {address, tenantInfo, expenses};
    // store.set('rentals', JSON.stringify(newProp));
    // // for all items in state

    for (let key in this.state) {
      // if the key exists in localStorage
      // if (store.key) {
        // get the key's value from localStorage
        let value = store.get(key) || "";
        console.log(value, 'value from localstorage');
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      // }
    }
  }

  saveStateToStore() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      store.set(key, JSON.stringify(this.state[key]));
    }
  }

  // updateInput(key, value) {
  //   // update react state
  //   this.setState({ [key]: value });
  // }

  // addItem() {
  //   // create a new item with unique id
  //   const newItem = {
  //     id: 1 + Math.random(),
  //     value: this.state.newItem.slice()
  //   };

  // // copy current list of items
  // const list = [...this.state.list];
  
  // // add the new item to the list
  // list.push(newItem);

  //   // update state with new list, reset the new item input
  //   this.setState({
  //     list,
  //     newItem: ''
  //   });
  // }

  // deleteItem(id) {
  //   // copy current list of items
  //   const list = [...this.state.list];
  //   // filter out the item being deleted
  //   const updatedList = list.filter(item => item.id !== id);
  
  //   this.setState({ list: updatedList });
  // }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <Router>
          <Nav />
        </Router>
        <main>
          <Landing isLoggedIn={isLoggedIn} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
