import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import nord from './img/nordstrom.png';
import garm from './img/garmentory.png';
import pata from './img/pata.jpeg';


class Stores extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="desc-up2">Warehouse Address: 3480 Example Area NE 34008</p>
                </div>
                <div className="flex-container" id="st">
                    <div className="flex-item" id="startBox">
                        <a href="https://shop.nordstrom.com/" target="_blank"><img id="casual1" src={nord} alt="dress" /></a>
                    </div>
                    <div className="flex-item" id="startBox">
                        <a href="https://www.garmentory.com" target="_blank"><img id="casual1" src={garm} alt="dress" /></a>
                    </div>
                    <div className="flex-item" id="startBox">
                        <a href="https://www.patagonia.com/home/" target="_blank"><img id="casual1" src={pata} alt="dress" /></a>
                    </div>

                </div>
            </div>
        );
    }
}

export { Stores };