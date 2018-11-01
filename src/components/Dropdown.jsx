import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import onClickOutside from "react-onclickoutside";

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(e){
    this.setState({
      listOpen: false
    })
  }

  selectItem = (address1) => {
    this.setState({
      headerTitle: address1,
      listOpen: false
    })
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const {list} = this.props
    const {listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
        <div className="nav-item" onClick={this.toggleList}>
          <div className="nav-link">{headerTitle}</div>
        </div>
        {listOpen && <ul className="navbar-nav mr-auto">
          {list.map((item,i)=> (
            <li className="nav-link" key={i} onClick={() => this.selectItem(item.address.address1)}>{item.address.address1} {item.selected}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default onClickOutside(Dropdown);
