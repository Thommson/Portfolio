import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
          <Link to="/" className="navbar-brand logo"><h3 className="bold-text">Sedurskas.me</h3></Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="https://github.com/Thommson/">Github</a>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
