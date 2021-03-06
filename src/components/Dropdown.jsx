import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import onClickOutside from "react-onclickoutside";
import { Link } from 'react-router-dom';

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside = (e) => {
    this.setState({
      listOpen: false
    })
  }

  selectItem = (address1) => {
    this.setState({
      headerTitle: address1,
      listOpen: false
    })
    this.props.updateCurrentRental(address1);
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const { list } = this.props
    const { listOpen, headerTitle } = this.state
    return(
      <a href="#" className="nav-link">
        <div className="nav-item" onClick={this.toggleList}>{ headerTitle + " " }
        {
          listOpen
            ? <FontAwesome name="angle-up" />
            : <FontAwesome name="angle-down" />
        }
        {
          listOpen && <ul className="navbar-nav mr-auto">
            {list.map((item,i)=> (
              <Link to="/property-details" className="nav-link" key={i} onClick={() => this.selectItem(item.address.address1)}>{item.address.address1} {item.selected}</Link>
              ))}
          </ul>
        }
        </div>
      </a>
    )
  }
}

export default onClickOutside(Dropdown);
