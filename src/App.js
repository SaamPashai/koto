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
import '../node_modules/font-awesome/css/font-awesome.min.css';

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
            <Banner />
            <Navi />
            <DdownSearch />
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
          <FooterPage />
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
            <Link className="none" to={"/"}><li className="newNavBros"><span className="nl">HOME</span></li></Link>
            <Link className="none" to={"/YouShop"}><li className="newNavBros"><span className="nl">YOU SHOP</span></li></Link>
            <Link className="none" to={"/WeShop"}><li className="newNavBros"><span className="nl">WE SHOP</span></li></Link>
            <Link className="none" to={"/WeShop"}><li className="newNavBros"><span className="nl">STORES</span></li></Link>
            <Link className="none" to={"/WeShop"}><li className="newNavBros"><span className="nl">DEALS</span></li></Link>
            {/* <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Essentials</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Beyond Casual</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Swimwear</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Footwear</span></li></Link>
            <Link className="none" to={"/Test"}><li className="newNavBros"><span className="nl">Hair + Wigs</span></li></Link> */}
          </ul>
        </nav>
        {/* <div className="column-center3">
          <span></span>
        </div>
        <div>
          <Link className="link" to={"/LoginPage"}><div className="topcorner">
            <i className="fa fa-user" id="userIcon"></i><p className="signIn">Sign in</p>
            <p className="myAccount">My Account</p>
          </div></Link>
        </div> */}
      </div>
    )
  }
}

class DdownSearch extends Component {
  render() {
    return (
      <div className="underBar">
        <div className="dropdown">
          <button className="dropbtn">SHOP BY DEPARTMENT</button>
          <div className="dropdown-content">
            <a href="#">Wemon</a>
            <a href="#">Men</a>
            <a href="#">Kids &amp; Baby</a>
            <a href="#">Shoes</a>
            <a href="#">Handbags &amp; Accessories</a>
            <a href="#">Beauty</a>
            <a href="#">Hair &amp; Wigs</a>
            <a href="#">Jewerly</a>
            <a href="#">Watches</a>
            <a href="#">Swimwear</a>
            <a href="#">Bed &amp; Bath</a>
            <a href="#">Juniors</a>
          </div>
        </div>

        <div className="column-center3">
          <span></span>
        </div>
        <input type="text" placeholder="Search.."></input>
        <button className="searchBut" type="submit"><i className="fa fa-search"></i></button>


      </div>
    )
  }
}

class FooterPage extends Component {
  render() {
    return (
      <div id="linkSection">

        <div className="column-left2">
          <p></p>
        </div>
        <div className="column-center2">
          <span className="linkText">USEFUL LINKS</span>
          <ul>
            <li className="linkItems">CATELOG</li>
            <li className="linkItems">GIFT CARDS</li>
            <li className="linkItems">COUPONS &amp; PROMOS</li>
            <li className="linkItems">REFER A FRIEND</li>
          </ul>
        </div>
        <div className="column-right2">
          <span className="linkText">SUPPORT</span>
          <ul>
            <li className="linkItems">OUR STORY</li>
            <li className="linkItems">CAREERS</li>
            <li className="linkItems">CONTACT US</li>
            <li className="linkItems">CUSTOMER SERVICE</li>
            <li className="linkItems">START A RETURN</li>
          </ul>
        </div>
        <div className="column-space2">
          <p></p>
        </div>
        <div className="column-end2">
          <p className="linkText">STAY CONNECTED</p>
          <ul className="connect">
            <li className="linkItems"><i id="bigIcon" className="fa fa-facebook-f"></i><i id="bigIcon" className="fa fa-twitter"></i>
            <i id="bigIcon" className="fa fa-instagram"></i><i id="bigIcon" className="fa fa-pinterest-p"></i></li>
            <li className="linkItems"><i id="bigIcon" class="fa fa-envelope"></i><span id="emailText">Subcribe To Our Emails</span></li>
          </ul>
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
      <Link className="link" to={"/LoginPage"}><div className="topcorner">
        <i className="fa fa-user" id="userIcon"></i><p className="signIn">Sign in</p>
        <p className="myAccount">My Account</p>
      </div></Link>
    )
  }
}

class Banner extends Component {
  render() {
    return (
      <div>
        <p className="top-banner">Free Shipping with $75 purchase + Free Store Pickup.</p>
      </div>
    )
  }
}













