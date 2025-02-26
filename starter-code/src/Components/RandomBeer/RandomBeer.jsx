import React, { Component } from 'react'
import axios from "axios";
import './RandomBeer.css'

export default class RandomBeer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentWillMount() {
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    axios
      .get(`http://localhost:5000/random`)
      .then(responseFromServer => {
        const beer = responseFromServer.data;
        this.setState({ beer });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {

    return (
      <div className="single-beer">
        <ul>
          <li>
            <img src={this.state.beer.image_url} alt='#' />
          </li>
          <li>
            <div className="title-section">
              <div className="first-title">
                <h1>{this.state.beer.name}</h1>
                
              </div>
              <div className="second-title">
                <h2>{this.state.beer.tagline}</h2>
              </div>
            </div>
          </li>
          <li>
            <div className='description-beer'>
              <p>{this.state.beer.description}</p>
            </div>
          </li>
          <li>
              <p>Created by: {this.state.beer.contributed_by}</p>
          </li>
        </ul>
      </div>
    )
  }
}