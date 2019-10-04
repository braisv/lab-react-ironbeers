import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='container-home'>
        <Link to={`/beers`}>
          <ul>
            <li>
              <img src="/images/beers.png" alt='#' />
            </li>
            <li>
              <h1>All Beers</h1>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, ea earum, numquam impedit explicabo quas ipsa repellat
                fugit tempore at iure accusantium, officiis voluptatibus placeat
                maiores corporis neque ullam corrupti?
              </p>
            </li>
          </ul>
        </Link>
        <Link to={`/newBeer`}>
          <ul>
            <li>
              <img src="/images/new-beer.png" alt='#' />
            </li>
            <li>
              <h1>New Beer</h1>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, ea earum, numquam impedit explicabo quas ipsa repellat
                fugit tempore at iure accusantium, officiis voluptatibus placeat
                maiores corporis neque ullam corrupti?
              </p>
            </li>
          </ul>
        </Link>
        <Link to={`/randomBeer`}>
          <ul>
            <li>
              <img src="/images/random-beer.png" alt='#' />
            </li>
            <li>
              <h1>Ramdom Beer</h1>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, ea earum, numquam impedit explicabo quas ipsa repellat
                fugit tempore at iure accusantium, officiis voluptatibus placeat
                maiores corporis neque ullam corrupti?
              </p>
            </li>
          </ul>
        </Link>
      </div>
    );
  }
}