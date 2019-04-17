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
          <li className="itemLeft">Score: {this.props.score}</li>
          <li className="itemLeft">
            Click any image to earn points,but don't click the same image twice,
            or GAME OVER!!. Click all 25 pics, and you win!
            <li />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
