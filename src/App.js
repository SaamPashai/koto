import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import StickyFooter from 'react-sticky-footer';

import { Button, Input, Checkbox } from 'antd';

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
import { Modal } from 'react-bootstrap';
import './App.css';
import { Homepage } from './Homepage';
import { Test } from './Test';
import { You } from './YouShop';
import { Stores } from './YouStores';
import { Stores2 } from './YouStores2';
import { Stores3 } from './YouStores3';
import { We } from './WeShop';
import { WStores } from './WeStores';
import { WStores2 } from './WeStores2';
import { WStores3 } from './WeStores3';
import { Register } from './LoginPage'
import koto from './img/kotobra.png';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            {/* <Jumbotron className="banner">
              <img id="jerrywest" src={koto} alt="logo" />
            </Jumbotron>
            <Navigation /> */}
            <Navi />
            <Route exact path="/" component={Homepage} />
            <Route path="/Test" component={Test} />
            <Route path="/YouShop" component={You} />
            <Route path="/YouStores" component={Stores} />
            <Route path="/YouStores2" component={Stores2} />
            <Route path="/YouStores3" component={Stores3} />
            <Route path="/WeShop" component={We} />
            <Route path="/WeStores" component={WStores} />
            <Route path="/WeStores2" component={WStores2} />
            <Route path="/WStores3" component={WStores3} />
            <Route path="/LoginPage" component={Register} />
          </React.Fragment>
          <Log />
          {/* <FooterPage /> */}
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
          {/* <NavbarBrand href="/">Our Shop</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="center" navbar>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/YouShop"><span className="navClick">You Shop</span></NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink tag={Link} to="/WeShop"><span className="navClick">We Shop</span></NavLink>
              </NavItem>
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


class Navi extends Component {
  render() {
    return (
      <div>
        <nav>
          <img id="jerrywest" src={koto} alt="logo" />
          <ul>
            <Link className="none" to={"/"}><li className="newNavBros"><span className="nl">Home</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">New Items</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Clothing</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Essentials</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Beyond Casual</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Swimwear</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Footwear</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Hair + Wigs</span></li></Link>
          </ul>
        </nav>
      </div>
    )
  }
}


class FooterPage extends Component {
  render() {
    return (
      <div>
        <div id="linkSection">
          <div className="flex-container">
            <div className="flex-item" id="linkStart">
              <span className="linkText">USEFUL LINKS</span>
              <ul>
                <li className="linkItems">CATELOG</li>
                <li className="linkItems">GIFT CARDS</li>
                <li className="linkItems">COUPONS &amp; PROMOS</li>
              </ul>
            </div>
            <div className="flex-item" id="nextLink">
              <span className="linkText">ABOUT US</span>
              <ul>
                <li className="linkItems">OUR STORY</li>
                <li className="linkItems">CAREERS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// class Register extends Component {
//   render() {
//     return (
//       <div>
//         <div class="form-popup" id="myForm">
//           <form action="/action_page.php" class="form-container">
//             <h1>Login</h1>

//             <label for="email"><b>Email</b></label>
//             <input type="text" placeholder="Enter Email" name="email" required />

//             <label for="psw"><b>Password</b></label>
//             <input type="password" placeholder="Enter Password" name="psw" required />

//             <button type="submit" class="btn">Login</button>
//             <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

class Log extends Component {
  render() {
    return (
      <div className="topcorner">
        <Link to={"/LoginPage"}><u>Login/Register</u></Link>
      </div>
    )
  }
}










