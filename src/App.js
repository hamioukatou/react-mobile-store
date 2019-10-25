import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Deafault';
import { Switch, Route } from "react-router-dom";
import Modal from './components/Modal';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/Details" component={Details} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Default" component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App


