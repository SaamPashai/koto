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
      <div id="nav">
        <ul>
          <li className="drc"><Link className="a" to="/">Homepage</Link></li>
          <li><Link className="a" to="/Test">Testpage</Link></li>
          <li><Link className="a" to="/Test">Testpage</Link></li>
          <li><Link className="a" to="/Test">Testpage</Link></li>
        </ul>
      </div>
      

      // <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="center" navbar>
      //         <NavItem className="navItem">
      //           <NavLink tag={Link} to="/"><span className="navClick">Homepage</span></NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
    )
  }
}


