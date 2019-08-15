import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import blue from './img/piecesofstar.png';
import ab from './img/akoo.jpeg';
import west from './img/aglass.png';


class Stores3 extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="desc-up2">Warehouse Address: 3480 Example Area NE 34008</p>
                </div>
                <div className="flex-container" id="st">
                    <div className="flex-item" id="startBox">
                        <a href="https://piecesofstarr.com/" target="_blank"><img id="casual1" src={blue} alt="dress" /></a>
                    </div>
                    <div className="flex-item" id="startBox">
                        <a href="https://www.akooclothingbrand.com" target="_blank"><img id="casual1" src={ab} alt="dress" /></a>
                    </div>
                    <div className="flex-item" id="startBox">
                        <a href="https://abbey-glass.com" target="_blank"><img id="casual1" src={west} alt="dress" /></a>
                    </div>

                </div>
            </div>
        );
    }
}

export { Stores3 };