import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllBeers.css";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: []
    };
  }

  getAllBeers = () => {
    axios
      .get(`http://localhost:5000/all`)
      .then(responseFromServer => {
        this.setState({
          listOfBeers: responseFromServer.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    console.log(this.state.listOfBeers);

    return (
      <div className='beer-container'>
        {this.state.listOfBeers.map(beer => (
          <Link to={`/beers/${beer._id}`}>
          <ul key={beer.id} className="beer-section">
            <div className="image-section">
              <li>

                <img src={beer.image_url} alt='#' />
              </li>
            </div>
            <div className="description-section">
              <li>
                <h1>{beer.name}</h1>
              </li>
              <li>
                <h2>{beer.tagline}</h2>
              </li>
            </div>
          </ul>
          </Link>
        ))}
      </div>
    );
  }
}