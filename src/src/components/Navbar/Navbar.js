//sets up the reusable Navbar component
import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
      <h1>RUNNING WILD</h1>
        <ul>
          <li className="itemLeft">Test Your Memory</li>
          <li className="itemCenter" />
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;