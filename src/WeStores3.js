import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import blue from './img/piecesofstar.png';
import ab from './img/akoo.jpeg';
import west from './img/aglass.png';


class WStores3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="desc-up2">Warehouse Address: 3480 Example Area NE 34008</p>
                </div>
                <div className="flex-container" id="st">
                    <div className="flex-item" id="startBox">
                        <Link to={"/Test"}><img id="casual1" src={blue} alt="dress" /></Link>
                    </div>
                    <div className="flex-item" id="startBox">
                        <Link to={"/Test"}><img id="casual1" src={ab} alt="dress" /></Link>
                    </div>
                    <div className="flex-item" id="startBox">
                        <Link to={"/Test"}><img id="casual1" src={west} alt="dress" /></Link>
                    </div>

                </div>
            </div>
        );
    }
}

export { WStores3 };