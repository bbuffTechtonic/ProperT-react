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
    this.state = {
      rentals: [],
      isLoggedIn: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
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
    const address = {
      address1: '123 Elm St.',
      address2: '#305',
      city: 'Denver',
      state: 'CO',
      zip: 80209,
    };

    const tenantInfo = {
      firstName: 'Maggie',
      lastName: 'Brown',
      email: 'maggie@abc.org',
      monthlyRent: 1750,
      leaseStart: '6/1/2018',
      leaseEnd: '5/31/2019',
    };
    //
    // //Expense Object
    const expenses = {
      mileage: [
        {
          date: '7/5/2018',
          amount: 25,
          description: 'Miles driven',
        },
        {
          date: '8/18/2018',
          amount: 25,
          description: 'Miles driven',
        },
      ],
      mortgage: [
        {
        premium: 1700,
        escrow: 800,
        interest: 85,
        mortgageIns: 100
        }
      ],
      maintenance: [
        {
          date: '7/18/2018',
          description: 'cleaning',
          amount: 160,
          image: '../images/receipt.jpg',
        },
      ],
      suppliesGoods: [
        {
          date: '9/01/2018',
          description: 'bathroom cleaning supplies',
          amount: 25,
          image: '../images/receipt.jpg',
        },
      ],
      misc: [
        {
          date: '7/18/2018',
          description: 'painting living room wall',
          amount: 800,
          image: '../images/receipt.jpg',
        },
      ],
      hoa: [
        {
          date: '6/1/2018',
          amount: 50,
        },
      ],
      rent: [
        {
          date: '6/5/2018',
          amount: 1750,
        },
        {
          date: '7/2/2018',
          amount: 1750,
        },
        {
          date: '8/5/2018',
          amount: 1750,
        },
      ],
    };

    const Prop2 = {
      address:
      {
        address1: '800 Water St.',
        address2: '2B',
        city: 'New York',
        state: 'NY',
        zip: 10410,
      },
      tenantInfo: {
        firstName: 'Celeste',
        lastName: 'Green',
        email: 'celeste@def.org',
        monthlyRent: 4850,
        leaseStart: '4/1/2018',
        leaseEnd: '5/31/2019',
      },
      expenses: {
        mileage: [
          {
            date: '7/5/2018',
            amount: 25,
            description: 'Miles driven',
          },
          {
            date: '8/18/2018',
            amount: 25,
            description: 'Miles driven',
          },
          {
            date: '9/18/2018',
            amount: 50,
            description: 'Miles driven',
          },
        ],
        mortgage: {
          premium: 3500,
          escrow: 800,
          interest: 85,
          mortgageIns: 100,
        },
        maintenance: [
          {
            date: '7/18/2018',
            description: 'cleaning',
            amount: 160,
            image: '../images/receipt.jpg',
          },
          {
            date: '8/18/2018',
            description: 'cleaning',
            amount: 260,
            image: '../images/receipt.jpg',
          },
        ],
        suppliesGoods: [
          {
            date: '9/01/2018',
            description: 'bathroom cleaning supplies',
            amount: 25,
            image: '../images/receipt.jpg',
          },
          {
            date: '10/01/2018',
            description: 'bathroom cleaning supplies',
            amount: 25,
            image: '../images/receipt.jpg',
          },
        ],
        misc: [
          {
            date: '7/18/2018',
            description: 'painting living room wall',
            amount: 800,
            image: '../images/receipt.jpg',
          },
        ],
        hoa: [
          {
            date: '6/1/2018',
            amount: 50,
          },
          {
            date: '7/1/2018',
            amount: 50,
          },
        ],
        rent: [
          {
            date: '6/5/2018',
            amount: 4850,
          },
          {
            date: '7/2/2018',
            amount: 4850,
          },
          {
            date: '8/5/2018',
            amount: 4850,
          },
          {
            date: '9/5/2018',
            amount: 4850,
          },
        ],
      },
    };
    const newProp = { address, tenantInfo, expenses };
    const rentals = [];
    rentals.push(newProp);
    rentals.push(Prop2);
    store.set('rentals', JSON.stringify(rentals));

    const value = JSON.parse(store.get('rentals'));
    this.setState({ rentals: value });
  }

  saveStateToStore() {
    // for every item in React state
    store.set('rentals', JSON.stringify(this.state.rentals));
  }

  // updateInput(key, value) {
  //   // update react state
  //   this.setState({ [key]: value });
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     'beforeunload',
  //     this.saveStateToStore.bind(this),
  //   );

  //   // saves if component has a chance to unmount
  //   this.saveStateToStore();
  // }

  // hydrateStateWithStore() {
  //   // var address = {
  //   //   address1: '123 Elm St.',
  //   //   address2: '#305',
  //   //   city: 'Denver',
  //   //   state: 'CO',
  //   //   zip: 80209
  //   // };
  //   //
  //   // var tenantInfo = {
  //   //   firstName: "Maggie",
  //   //   lastName: "Brown",
  //   //   email: "maggie@abc.org",
  //   //   monthlyRent: 1750,
  //   //   leaseStart: "6/1/2018",
  //   //   leaseEnd: "5/31/2019"
  //   // };
  //   // //
  //   // // //Expense Object
  //   // var expenses = {
  //   //   mileage: [
  //   //     {
  //   //       date: "7/5/2018",
  //   //       amount: 25,
  //   //       description: "Miles driven"
  //   //     },
  //   //     {
  //   //       date: "8/18/2018",
  //   //       amount: 25,
  //   //       description: "Miles driven"
  //   //     }
  //   //   ],
  //   //   mortgage: {
  //   //     premium: 1700,
  //   //     escrow: 800,
  //   //     interest: 85,
  //   //     mortgageIns: 100
  //   //   },
  //   //   maintenance: [
  //   //     {
  //   //       date: "7/18/2018",
  //   //       description:"cleaning",
  //   //       amount:160,
  //   //       image:"../images/receipt.jpg"
  //   //     }
  //   //   ],
  //   //   suppliesGoods: [
  //   //     {
  //   //       date: "9/01/2018",
  //   //       description:"bathroom cleaning supplies",
  //   //       amount:25,
  //   //       image:"../images/receipt.jpg"
  //   //     }
  //   //   ],
  //   //   misc: [
  //   //     {
  //   //       date: "7/18/2018",
  //   //       description:"painting living room wall",
  //   //       amount:800,
  //   //       image:"../images/receipt.jpg"
  //   //     }
  //   //   ],
  //   //   hoa: [
  //   //     {
  //   //       date: "6/1/2018",
  //   //       amount: 50
  //   //     }
  //   //   ],
  //   //   rent: [
  //   //     {
  //   //       date: "6/5/2018",
  //   //       amount: 1750
  //   //     },
  //   //     {
  //   //       date: "7/2/2018",
  //   //       amount: 1750
  //   //     },
  //   //     {
  //   //       date: "8/5/2018",
  //   //       amount: 1750
  //   //     }
  //   //   ]
  //   // };
  //   // var newProp = {address, tenantInfo, expenses};
  //   // var rentals = [];
  //   // rentals.push(newProp);
  //   // store.set('rentals', rentals);
  //   // // for all items in state

  //   for (let key in this.state) {
  //     // if the key exists in localStorage
  //     // if (store.key) {
  //       // get the key's value from localStorage
  //       let value = store.get(key) || "";
  //       // console.log(value, 'value from localstorage');
  //       // parse the localStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     // }
  //   }
  // }

  // saveStateToStore() {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     store.set(key, JSON.stringify(this.state[key]));
  //   }
  // }

  // // updateInput(key, value) {
  // //   // update react state
  // //   this.setState({ [key]: value });
  // // }

  // // addItem() {
  // //   // create a new item with unique id
  // //   const newItem = {
  // //     id: 1 + Math.random(),
  // //     value: this.state.newItem.slice()
  // //   };

  // // // copy current list of items
  // // const list = [...this.state.list];

  // // // add the new item to the list
  // // list.push(newItem);

  // //   // update state with new list, reset the new item input
  // //   this.setState({
  // //     list,
  // //     newItem: ''
  // //   });
  // // }

  // // deleteItem(id) {
  // //   // copy current list of items
  // //   const list = [...this.state.list];
  // //   // filter out the item being deleted
  // //   const updatedList = list.filter(item => item.id !== id);

  // //   this.setState({ list: updatedList });
  // // }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleSuccessfulLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <Nav />
          <main>
            <Route exact path="/" render={props => <Landing {...props} isLoggedIn={isLoggedIn} handleSuccessfulLogin={this.handleSuccessfulLogin} />} />
            <Route path="/account" component={AccountManagement} />
            <Route path="/property-details" component={PropertyDetails} />
          </main>
          <Footer testProp="did this work?" />
        </div>
      </Router>
    );
  }
}

export default App;
