import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AccountManagement from './components/AccountManagement';
import PropertyDetails from './components/PropertyDetails';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

const store = require('store');

class App extends Component {
  constructor() {
    super();
    const myRental = JSON.parse(store.get('rentals'))[0];
    this.state = {
      rentals: [],
      isLoggedIn: false,
      currentRental: myRental,
      landlord1: {
        firstname: 'Patrick', lastName: 'Smith', email: 'patrick@yoohoo.org', password: 'password', avatar: './images/userOne.jpeg',
      },
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handlePropertyUpdate = this.handlePropertyUpdate.bind(this);
    this.handleAccountChanges = this.handleAccountChanges.bind(this);
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
    // const address = {
    //   address1: '123 Elm St.',
    //   address2: '#305',
    //   city: 'Denver',
    //   state: 'CO',
    //   zip: 80209,
    // };
    //
    // const tenantInfo = {
    //   firstName: 'Maggie',
    //   lastName: 'Brown',
    //   email: 'maggie@abc.org',
    //   monthlyRent: 1750,
    //   leaseStart: '6/1/2018',
    //   leaseEnd: '5/31/2019',
    // };
    // // //Expense Object
    // const expenses = {
    //   mileage: [
    //     {
    //       date: '7/5/2018',
    //       amount: 25,
    //       description: 'Miles driven',
    //     },
    //     {
    //       date: '8/18/2018',
    //       amount: 25,
    //       description: 'Miles driven',
    //     },
    //   ],
    //   mortgage: [
    //     {
    //       premium: 1700,
    //       escrow: 800,
    //       interest: 85,
    //       mortgageIns: 100,
    //     },
    //   ],
    //   maintenance: [
    //     {
    //       date: '7/18/2018',
    //       description: 'cleaning',
    //       amount: 160,
    //       image: '../images/receipt.jpg',
    //     },
    //   ],
    //   suppliesGoods: [
    //     {
    //       date: '9/01/2018',
    //       description: 'bathroom cleaning supplies',
    //       amount: 25,
    //       image: '../images/receipt.jpg',
    //     },
    //   ],
    //   misc: [
    //     {
    //       date: '7/18/2018',
    //       description: 'painting living room wall',
    //       amount: 800,
    //       image: '../images/receipt.jpg',
    //     },
    //   ],
    //   hoa: [
    //     {
    //       date: '6/1/2018',
    //       amount: 50,
    //     },
    //   ],
    //   rent: [
    //     {
    //       date: '6/5/2018',
    //       amount: 1750,
    //     },
    //     {
    //       date: '7/2/2018',
    //       amount: 1750,
    //     },
    //     {
    //       date: '8/5/2018',
    //       amount: 1750,
    //     },
    //   ],
    // };
    //
    // const Prop2 = {
    //   address:
    //   {
    //     address1: '800 Water St.',
    //     address2: '2B',
    //     city: 'New York',
    //     state: 'NY',
    //     zip: 10410,
    //   },
    //   tenantInfo: {
    //     firstName: 'Celeste',
    //     lastName: 'Green',
    //     email: 'celeste@def.org',
    //     monthlyRent: 4850,
    //     leaseStart: '4/1/2018',
    //     leaseEnd: '5/31/2019',
    //   },
    //   expenses: {
    //     mileage: [
    //       {
    //         date: '7/5/2018',
    //         amount: 25,
    //         description: 'Miles driven',
    //       },
    //       {
    //         date: '8/18/2018',
    //         amount: 25,
    //         description: 'Miles driven',
    //       },
    //       {
    //         date: '9/18/2018',
    //         amount: 50,
    //         description: 'Miles driven',
    //       },
    //     ],
    //     mortgage: {
    //       premium: 3500,
    //       escrow: 800,
    //       interest: 85,
    //       mortgageIns: 100,
    //     },
    //     maintenance: [
    //       {
    //         date: '7/18/2018',
    //         description: 'cleaning',
    //         amount: 160,
    //         image: '../images/receipt.jpg',
    //       },
    //       {
    //         date: '8/18/2018',
    //         description: 'cleaning',
    //         amount: 260,
    //         image: '../images/receipt.jpg',
    //       },
    //     ],
    //     suppliesGoods: [
    //       {
    //         date: '9/01/2018',
    //         description: 'bathroom cleaning supplies',
    //         amount: 25,
    //         image: '../images/receipt.jpg',
    //       },
    //       {
    //         date: '10/01/2018',
    //         description: 'bathroom cleaning supplies',
    //         amount: 25,
    //         image: '../images/receipt.jpg',
    //       },
    //     ],
    //     misc: [
    //       {
    //         date: '7/18/2018',
    //         description: 'painting living room wall',
    //         amount: 800,
    //         image: '../images/receipt.jpg',
    //       },
    //     ],
    //     hoa: [
    //       {
    //         date: '6/1/2018',
    //         amount: 50,
    //       },
    //       {
    //         date: '7/1/2018',
    //         amount: 50,
    //       },
    //     ],
    //     rent: [
    //       {
    //         date: '6/5/2018',
    //         amount: 4850,
    //       },
    //       {
    //         date: '7/2/2018',
    //         amount: 4850,
    //       },
    //       {
    //         date: '8/5/2018',
    //         amount: 4850,
    //       },
    //       {
    //         date: '9/5/2018',
    //         amount: 4850,
    //       },
    //     ],
    //   },
    // };
    // const newProp = { address, tenantInfo, expenses };
    // const rentals = [];
    // rentals.push(newProp);
    // rentals.push(Prop2);
    // store.set('rentals', JSON.stringify(rentals));

    const value = JSON.parse(store.get('rentals'));
    console.log(value, 'from hydrateStateWithStore');
    this.setState({ rentals: value });
  }

  saveStateToStore() {
    // for every item in React state
    store.set('rentals', JSON.stringify(this.state.rentals));
  }

  handleSuccessfulLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handlePropertyUpdate(e) {
    e.preventDefault();
    const allRentals = JSON.parse(store.get('rentals'));

    const editedAddress = {
      address1: e.target[0].value,
      address2: e.target[1].value,
      city: e.target[2].value,
      state: e.target[3].value,
      zip: e.target[4].value,
    };

    const editedTenant = {
      firstName: e.target[5].value,
      lastName: e.target[6].value,
      email: e.target[7].value,
      monthlyRent: e.target[10].value,
      leaseStart: e.target[8].value,
      leaseEnd: e.target[9].value,
    };

    const toEdit = allRentals.find((element) => {
      if (element.address.address1 === editedAddress.address1) {
        return element;
      }
      return null;
    });

    const newObj = {
      address: editedAddress,
      expenses: toEdit.expenses,
      tenantInfo: editedTenant,
    };

    const findIndex = () => {
      let index = 0;
      for (let i = 0; i < allRentals.length; i++) {
        if (allRentals[i].address.address1 === toEdit.address1) {
          index = allRentals.indexOf(toEdit);
        }
      }
      return index;
    };

    allRentals.splice(findIndex(), 1);
    allRentals.push(newObj);

    store.set('rentals', JSON.stringify(allRentals));
    console.log(allRentals);

    // SOMETHING WRONG WHEN THIS RUNS!!!
    this.hydrateStateWithStore();


    // console.log(allRentals, "rentals after splice and push");
  }

  handleAccountChanges(newLandlordObj) {
    this.setState({
      landlord1: newLandlordObj,
    });
  }

  render() {
    const { isLoggedIn, currentRental, landlord1 } = this.state;
    return (
      <Router>
        <div className="App">
          <Nav currentRental={currentRental} hydrateStateWithStore={this.hydrateStateWithStore} />
          <main>
            <Route exact path="/" render={props => <Landing {...props} isLoggedIn={isLoggedIn} landlord1={landlord1} handleSuccessfulLogin={this.handleSuccessfulLogin} />} />
            <Route path="/account" render={props => <AccountManagement {...props} landlord1={landlord1} handleAccountChanges={this.handleAccountChanges} />} />
            <Route path="/property-details" render={props => <PropertyDetails {...props} currentRental={currentRental} handlePropertyUpdate={this.handlePropertyUpdate} />} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
