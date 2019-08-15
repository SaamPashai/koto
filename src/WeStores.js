import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import nord from './img/nordstrom.png';
import garm from './img/garmentory.png';
import pata from './img/pata.jpeg';


class WStores extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="desc-up2">Warehouse Address: 3480 Example Area NE 34008</p>
                </div>
                <div className="flex-container" id="st">
                    <div className="flex-item" id="startBox">
                        <Link to={"/Test"}><img id="casual1" src={nord} alt="dress" /></Link>
                    </div>
                    <div className="flex-item" id="startBox">
                        <Link to={"/Test"}><img id="casual1" src={garm} alt="dress" /></Link>
                    </div>
                    <div className="flex-item" id="startBox">
                        <Link to={"/Test"}><img id="casual1" src={pata} alt="dress" /></Link>
                    </div>

                </div>
            </div>
        );
    }
}

export { WStores };