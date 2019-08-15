import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";


import dress from './img/dress.jpg';
import jacket from './img/jacket.jpg';
import bw from './img/bw.jpg';
import c1 from './img/s3.jpeg';
import c2 from './img/s5.jpeg';
import b1 from './img/b4.jpeg';
import b2 from './img/b5.jpeg';
import b3 from './img/b1.jpeg';
import col1 from './img/col1.jpg';
import col2 from './img/col2.jpg';
import col3 from './img/col3.jpg';
import col4 from './img/col4.jpg';
import col5 from './img/col5.jpg';








class Homepage extends Component {
    render() {
        return (
            <div>
                <main>
                    <Header />
                    <Casual />
                    <Business />
                    <PictureRows />
                    <SocialMedia />
                    
                </main>
            </div>
        );
    }
}

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <Carousel showArrows={true} showStatus={false} showIndicators={false} autoPlay={true} showThumbs={false}
                    stopOnHover={false} useKeyboardArrows={true} infiniteLoop={true}>
                    <div>
                        <img className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img className="carousel" src={jacket} alt="jacket" />
                    </div>
                    <div>
                        <img className="carousel" src={bw} alt="bw" />
                    </div>
                </Carousel>

            </div>
        )
    }
}

export class Casual extends Component {
    render() {
        return (
            <div className="casualSection">
                <div className="flex-container">
                    <div className="flex-item" id="startBox">
                        <img id="casual1" src={c1} alt="dress" />
                        <p className="desc-down">the best looks for the sun</p>
                    </div>
                    <div className="flex-item" id="endBox">
                        <img id="casual2" src={c2} alt="dress" />
                        <p className="desc-down">swimwear of the season</p>
                    </div>
                </div>
            </div>
        )
    }
}

export class Weekend extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export class Seasonal extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export class Business extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="flex-item" id="startBox">
                    <img id="casual1" src={b1} alt="dress" />
                    <p className="desc-down">style for business</p>
                </div>
                <div className="flex-item" id="startBox">
                    <img id="casual2" src={b3} alt="dress" />
                    <p className="desc-down">dress for the wild</p>
                </div>
                <div className="flex-item" id="endBox">
                    <img id="casual2" src={b2} alt="dress" />
                    <p className="desc-down">for casual days</p>
                </div>
            </div>

        )
    }
}

export class PictureRows extends Component {
    render() {
        return (
            <div className="rowsSection">
                <h2 className="titleCent">SHOP BY OCCASSION</h2>
                <div className="flex-container">
                    <div className="flex-item" id="colBegin">
                        <div className="dool">
                            <img id="casual1" src={col1} alt="dress" />
                            <p className="desc-down2">WEEKEND</p>
                        </div>
                    </div>
                    <div className="flex-item" id="startBox">
                        <div className="dool">
                            <img id="casual2" src={col2} alt="dress" />
                            <p className="desc-down2">CASUAL</p>
                        </div>
                    </div>
                    <div className="flex-item" id="startBox">
                        <div className="dool">
                            <img id="casual1" src={col3} alt="dress" />
                            <p className="desc-down2">VACATION</p>
                        </div>
                    </div>
                    <div className="flex-item" id="startBox">
                        <div className="dool">
                            <img id="casual2" src={col4} alt="dress" />
                            <p className="desc-down2">ACTIVITY</p>
                        </div>
                    </div>
                    <div className="flex-item" id="colEnd">
                        <div className="dool">
                            <img id="casual2" src={col5} alt="dress" />
                            <p className="desc-down2">HANGOUT</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class SocialMedia extends Component {
    render() {

        var settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            centerMode: true,
            centerPadding: "15px",
            autoPlay: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768, settings: "unslick",
                },
            ],

        };
        return (
            <div id="socialSection">
                <div className="socHead">
                    <h2 className="socTitleCent">LOVE OUR FACEBOOK OR INSTAGRAM PAGE - UPLOAD YOUR FAV-PHOTOS</h2>
                </div>
                <Slider {...settings}>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                    <div>
                        <img id="multi" className="carousel" src={dress} alt="dress" />
                    </div>
                </Slider>

            </div>
        )
    }
}

export class Links extends Component {
    render() {
        return (
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
        )
    }
}

export { Homepage };