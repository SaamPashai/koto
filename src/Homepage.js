import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import dress from './img/dress.jpg';
import jacket from './img/jacket.jpg';
import bw from './img/bw.jpg';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

class Homepage extends Component {
    render() {
        return (
            <div>
                <main>
                    <Header />
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

export { Homepage };