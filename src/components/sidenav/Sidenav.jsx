import React, { Component } from 'react';
import './Sidenav.css';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

class Sidenav extends Component {
  render() {
    return (
      <div id="sidenav" className="sidenav">
        <HamburgerMenu
          main={ this.props.main }
          sideNav={ this }/>
        <div style={{
            backgroundColor: '#1e2328',
            padding: 16,
          }}>
          <a href="#teste">Início</a>
          <a href="#teste">Quem sou eu?</a>
          <a href="#teste">Projetos</a>
          <a href="#teste">Contato</a>
        </div>
      </div>
    )
  }
}

export default Sidenav;
