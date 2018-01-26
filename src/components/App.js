import React, { Component } from 'react';
import Header from './Header';
// import Favorites from './Favorites.js';
import Favorites from './services/SoundCloudService'

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'Reactory SoundCloud Client'
            // tracks: [],
            // scInitialized: false,
            // nextHref: ''
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
