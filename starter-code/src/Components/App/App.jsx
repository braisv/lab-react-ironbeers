import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import AllBeers from "../AllBeers/AllBeers.jsx";
import NewBeer from "../NewBeer/NewBeer.jsx";
import Beer from "../Beer/Beer.jsx";
import RandomBeer from "../RandomBeer/RandomBeer.jsx";

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/newBeer" component={NewBeer} />
          <Route exact path="/randomBeer" component={RandomBeer} />
          <Route exact path="/beers/:id" component={Beer} />
        </Switch>
      </div>
    );
  }
}















