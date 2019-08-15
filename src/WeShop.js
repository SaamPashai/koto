import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import sea from './img/seattle.jpg';
import lon from './img/london.jpg';
import atl from './img/atlanta.jpg';
import milan from './img/milan.jpg';
import la from './img/la.jpg';
import paris from './img/paris.jpg';

class We extends Component {
    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-item" id="startBox">
                        <p className="desc-up">Seattle</p>
                        <Link to ={"/WeStores"}><img id="casual1" src={sea} alt="dress" /></Link>
                        
                    </div>
                    <div className="flex-item" id="startBox">
                        <p className="desc-up">London</p>
                        <Link to ={"/WeStores2"}><img id="casual2" src={lon} alt="dress" /></Link>
                    </div>
                    <div className="flex-item" id="endBox">
                        <p className="desc-up">Atlanta</p>
                        <Link to ={"/WeStores3"}><img id="casual2" src={atl} alt="dress" /></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export { We };