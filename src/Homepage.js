import React, { Component } from 'react';

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
                <h2 className="topMargin">Welcome</h2>
                <p>
                    Hi.
                </p>
 
                <p>
                    Test.
                </p>
            </div>
        )
    }
}

export { Homepage };