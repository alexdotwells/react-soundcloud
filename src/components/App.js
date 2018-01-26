import React, { Component } from 'react';
import Header from './Header';
import Tracks from './Track/Tracks';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'React SoundCloud Client'
        };
        // this.getTracks = this.getTracks.bind(this);
        // this.scInit = this.scInit.bind(this);
    }

    // componentDidMount() {
    //       this.getTracks();
    // }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Favorites details={this.state.tracks} />
                </div>
            </div>
        );
    }
}
