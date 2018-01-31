import React, { Component } from 'react';
import Header from './Header';
import Tracks from './Track/Tracks';
import Player from './player/Player';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'ReactCloud'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Player />
                <div className="mt-5">
                    <Tracks />
                </div>
            </div>
        );
    }
}
