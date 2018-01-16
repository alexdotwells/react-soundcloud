import React, { Component } from 'react';
import Header from './Header';
import Tracks from './Tracks/Tracks';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'React SoundCloud (Nolfi Stylee)'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Tracks />
                </div>
            </div>
        );
    }
}