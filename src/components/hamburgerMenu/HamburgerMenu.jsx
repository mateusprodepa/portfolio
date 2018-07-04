import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HamburgerMenu.css';

class NavigationBar extends Component {

  state = {
    isOpen: true
  }

  openNav = () => {
    ReactDOM.findDOMNode(this.props.sideNav).style.width = '285px';
    ReactDOM.findDOMNode(this.props.main).style.marginRight = "285px";
    let isOpened = this.state.isOpen;
    this.setState({ isOpen: !isOpened });
  }

  closeNav = () => {
    ReactDOM.findDOMNode(this.props.sideNav).style.width = 0;
    ReactDOM.findDOMNode(this.props.main).style.marginRight= 0;
    let isOpened = this.state.isOpen;
    this.setState({ isOpen: !isOpened });
  }

  render () {
    const { isOpen } = this.state;
    let classes = isOpen ? "open" : "open close" ;

    return (
      <div className="container" onClick={isOpen ? this.closeNav : this.openNav}>
        <div className={`stick stick-1 ${classes}`}></div>
        <div className={`stick stick-2 ${classes}`}></div>
        <div className={`stick stick-3 ${classes}`}></div>
      </div>
    )
  }
}

export default NavigationBar;
