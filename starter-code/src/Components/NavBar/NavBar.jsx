import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
            <div className='navbar-icon'>
              <Link to={`/`}>
                  <h2>Home</h2>
              </Link>
            </div>
      </nav>
    );
  }
}