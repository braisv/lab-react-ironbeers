import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="section col">
          <Link to={`/`}>
            <img src="./images/beers.png" alt='Beers imagen' />
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo incidunt harum ipsam, iste eum, omnis debitis quidem aut autem repellendus consectetur temporibus commodi consequatur perspiciatis soluta esse odit obcaecati?
          </p>
        </div>
        <div className="section col">
          <Link to={`/`}>
            <img src="./images/random-beer.png" alt="Random Beer imagen" />
            <h2>Random Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo incidunt harum ipsam, iste eum, omnis debitis quidem aut autem repellendus consectetur temporibus commodi consequatur perspiciatis soluta esse odit obcaecati?
            </p>
        </div>
        <div className="section col">
          <Link to={`/`}>
            <img src="./images/new-beer.png" alt="New Beer imagen" />
            <h2>New Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo incidunt harum ipsam, iste eum, omnis debitis quidem aut autem repellendus consectetur temporibus commodi consequatur perspiciatis soluta esse odit obcaecati?
           </p>
        </div>
      </div>
    )
  }
}
