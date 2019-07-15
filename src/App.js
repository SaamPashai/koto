import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron
} from 'reactstrap';
import './App.css';
import { Homepage } from './Homepage';
import { Test } from './Test';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Jumbotron className="banner">
              <h1>KOTOBRA</h1>
            </Jumbotron>
            <Navigation />
            <Route exact path="/" component={Homepage} />
            <Route path="/Test" component={Test} />
          </React.Fragment>
        </Router>

      </div>
    );
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="navbar">
        <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="center" navbar>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/"><span className="navClick">Homepage</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">New Items</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Clothing</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Essentials</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Beyond Casual</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Swimwear</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Footwear</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Hair + Wigs</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/Test"><span className="navClick">Vac-Wear</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}

