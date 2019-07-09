import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <main>
                    <Tesder />
                </main>
            </div>
        );
    }
}

export class Tesder extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="topMargin">Welcome</h2>
                <p>
                    testing.
                </p>
 
                <p>
                    peas.
                </p>
            </div>
        )
    }
}

export { Test };