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
      isLoggedIn: true,
      currentRental: myRental,
      landlord1: {
        firstname: 'Patrick', lastName: 'Smith', email: 'patrick@yoohoo.org', password: 'password', avatar: './images/userOne.jpeg',
      },
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handlePropertyUpdate = this.handlePropertyUpdate.bind(this);
    this.handleAccountChanges = this.handleAccountChanges.bind(this);
    this.hydrateStateWithStore = this.hydrateStateWithStore.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
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
//   const Prop1 = {
//       address:
//       {
//         address1: '800 Water St.',
//         address2: '2B',
//         city: 'New York',
//         state: 'NY',
//         zip: 10410,
//       },
//       tenantInfo:
//       {
//         firstName: 'Celeste',
//         lastName: 'Green',
//         email: 'celeste@def.org',
//         monthlyRent: 8850,
//         leaseStart: '4/1/2018',
//         leaseEnd: '5/31/2019',
//       },
//       expenses:
//       {
//         mileage: [
//         {
//           date: '7/5/2018',
//           amount: 25,
//           description: 'Miles driven',
//           image: "none",
//           category: "mileage",
//         },
//         {
//           date: '8/5/2018',
//           amount: 38,
//           description: 'Miles driven',
//           image: "none",
//           category: "mileage",
//         },
//         {
//           date: '9/17/2018',
//           amount: 55,
//           description: 'Miles driven',
//           image: "none",
//           category: "mileage",
//         },
//       ],
//       mortgage: [
//         {
//           date: '7/5/2018',
//           amount: 2500,
//           description: 'Monthly Mortage',
//           image: "none",
//           category: "mortgage",
//         },
//       ],
//       maintenance: [
//         {
//           date: '7/18/2018',
//           description: 'cleaning',
//           amount: 160,
//           image: '../images/receipt.jpg',
//           category: 'maintenance',
//         },
//         {
//           date: '8/18/2018',
//           description: 'cleaning',
//           amount: 260,
//           image: '../images/receipt.jpg',
//           category: 'maintenance',
//         },
//       ],
//       suppliesGoods: [
//         {
//           date: '9/01/2018',
//           description: 'bathroom cleaning supplies',
//           amount: 25,
//           image: '../images/receipt.jpg',
//          category: 'supplies/goods',
//         },
//         {
//           date: '10/01/2018',
//           description: 'bathroom cleaning supplies',
//           amount: 25,
//           image: '../images/receipt.jpg',
//          category: 'supplies/goods',
//         },
//       ],
//       misc: [
//         {
//           date: '7/18/2018',
//           description: 'painting living room wall',
//           amount: 800,
//           image: '../images/receipt.jpg',
//          category: 'miscellaneous',
//         },
//       ],
//       hoa: [
//         {
//           date: '7/18/2018',
//           description: 'monthly hoa fees',
//           amount: 80,
//           image: '../images/receipt.jpg',
//          category: 'hoa',
//         },
//         {
//           date: '8/18/2018',
//           description: 'monthly hoa fees',
//           amount: 80,
//           image: '../images/receipt.jpg',
//          category: 'hoa',
//         },
//       ],
//       rent: [
//         {
//           date: '7/18/2018',
//           description: 'monthly rent',
//           amount: 8850,
//           image: '../images/receipt.jpg',
//          category: 'rent',
//         },
//         {
//           date: '8/18/2018',
//           description: 'monthly rent',
//           amount: 8850,
//           image: '../images/receipt.jpg',
//          category: 'rent',
//         },
//         {
//           date: '9/18/2018',
//           description: 'monthly rent',
//           amount: 8850,
//           image: '../images/receipt.jpg',
//          category: 'rent',
//         },
//         {
//           date: '10/18/2018',
//           description: 'monthly rent',
//           amount: 8850,
//           image: '../images/receipt.jpg',
//          category: 'rent',
//         },
//       ],
//     },
//   };
//   const Prop2 = {
//     address:
//     {
//       address1: '75 Market St.',
//       address2: '101E',
//       city: 'Denver',
//       state: 'CO',
//       zip: 80102,
//     },
//     tenantInfo:
//     {
//       firstName: 'Bailey',
//       lastName: 'Thomas',
//       email: 'bailey@email.com',
//       monthlyRent: 2850,
//       leaseStart: '4/1/2018',
//       leaseEnd: '5/31/2019',
//     },
//     expenses:
//     {
//       mileage: [
//       {
//         date: '7/15/2018',
//         amount: 20,
//         description: 'Miles driven',
//         image: "none",
//         category: "mileage",
//       },
//       {
//         date: '10/5/2018',
//         amount: 30,
//         description: 'Miles driven',
//         image: "none",
//         category: "mileage",
//       },
//       {
//         date: '11/1/2018',
//         amount: 55,
//         description: 'Miles driven',
//         image: "none",
//         category: "mileage",
//       },
//     ],
//     mortgage: [
//       {
//         date: '7/5/2018',
//         amount: 2500,
//         description: 'Monthly Mortage',
//         image: "none",
//         category: "mortgage",
//       },
//     ],
//     maintenance: [
//       {
//         date: '7/18/2018',
//         description: 'cleaning',
//         amount: 160,
//         image: '../images/receipt.jpg',
//         category: 'maintenance',
//       },
//       {
//         date: '8/18/2018',
//         description: 'cleaning',
//         amount: 260,
//         image: '../images/receipt.jpg',
//         category: 'maintenance',
//       },
//     ],
//     suppliesGoods: [
//       {
//         date: '9/01/2018',
//         description: 'bathroom cleaning supplies',
//         amount: 25,
//         image: '../images/receipt.jpg',
//        category: 'supplies/goods',
//       },
//       {
//         date: '10/01/2018',
//         description: 'bathroom cleaning supplies',
//         amount: 25,
//         image: '../images/receipt.jpg',
//        category: 'supplies/goods',
//       },
//     ],
//     misc: [
//       {
//         date: '7/18/2018',
//         description: 'painting living room wall',
//         amount: 800,
//         image: '../images/receipt.jpg',
//        category: 'miscellaneous',
//       },
//     ],
//     hoa: [
//       {
//         date: '7/18/2018',
//         description: 'monthly hoa fees',
//         amount: 80,
//         image: '../images/receipt.jpg',
//        category: 'hoa',
//       },
//       {
//         date: '8/18/2018',
//         description: 'monthly hoa fees',
//         amount: 80,
//         image: '../images/receipt.jpg',
//        category: 'hoa',
//       },
//     ],
//     rent: [
//       {
//         date: '7/18/2018',
//         description: 'monthly rent',
//         amount: 2850,
//         image: '../images/receipt.jpg',
//        category: 'rent',
//       },
//       {
//         date: '8/18/2018',
//         description: 'monthly rent',
//         amount: 2850,
//         image: '../images/receipt.jpg',
//        category: 'rent',
//       },
//       {
//         date: '9/18/2018',
//         description: 'monthly rent',
//         amount: 2850,
//         image: '../images/receipt.jpg',
//        category: 'rent',
//       },
//       {
//         date: '10/18/2018',
//         description: 'monthly rent',
//         amount: 2850,
//         image: '../images/receipt.jpg',
//        category: 'rent',
//       },
//     ],
//   },
// };
//     const rentals = [];
//     rentals.push(Prop1);
//     rentals.push(Prop2);
//     store.set('rentals', JSON.stringify(rentals));
    const value = JSON.parse(store.get('rentals'));
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

    allRentals.splice(findIndex(), 1, newObj);
    store.set('rentals', JSON.stringify(allRentals));
    this.hydrateStateWithStore();
  }


  handleAddExpense(e) {
    e.preventDefault();

    const allRentals = JSON.parse(store.get('rentals'));
    const temp = {...this.state.currentRental};
    let newExpenseToAdd = {};
    const expenseType = e.target[2].value;

    switch(expenseType) {
      case 'mileage':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.mileage.push(newExpenseToAdd);
        console.log(temp.expenses.mileage);
        break;
      case 'mortgage':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.mortgage.push(newExpenseToAdd);
        console.log(temp.expenses.mortgage);
        break;
      case 'maintenance':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.maintenance.push(newExpenseToAdd);
        console.log(temp.expenses.maintenance);
        break;
      case 'suppliesGoods':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.suppliesGoods.push(newExpenseToAdd);
        console.log(temp.expenses.suppliesGoods);
        break;
      case 'hoa':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.hoa.push(newExpenseToAdd);
        console.log(temp.expenses.hoa);
        break;
      case 'rent':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.rent.push(newExpenseToAdd);
        console.log(temp.expenses.rent);
        break;
      case 'misc':
        newExpenseToAdd = {
          date: e.target[0].value,
          amount: e.target[3].value,
          description: e.target[1].value,
        }
        temp.expenses.misc.push(newExpenseToAdd);
        console.log(temp.expenses.misc);
        break;
      default:
        console.log('default - Not a valid expense');
    }

    const toChange = allRentals.find((element) => {
      if (element.address.address1 === temp.address.address1) {
        return element;
      }
      console.log('error');
      return null;
    })

    const findIndex = () => {
      let index = 0;
      for (let i = 0; i < allRentals.length; i++) {
        if (allRentals[i].address.address1 === temp.address.address1) {
          index = allRentals.indexOf(toChange);
        }
      }
      return index;
    };

    allRentals.splice(findIndex(), 1, temp);
    store.set('rentals', JSON.stringify(allRentals));
    this.hydrateStateWithStore();
  }


  handleAccountChanges(newLandlordObj) {
    this.setState({
      landlord1: newLandlordObj,
    });
  }

  handleCurrentRental = (address) => {

    // const currentAddress = address;
    console.log(address)
    //get actual object
    //this.setState({ currentRental: sss });
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
            <Route path="/property-details" render={props => <PropertyDetails {...props} currentRental={currentRental} handlePropertyUpdate={this.handlePropertyUpdate} handleAddExpense={this.handleAddExpense} />} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
