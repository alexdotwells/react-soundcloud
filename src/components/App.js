import React, { Component } from 'react';
import Header from './Header';
import Tracks from './Track/Tracks';
import Player from './player/Player';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'ReactCloud',
            selectedTrack: {
                artwork_url: 'https://i1.sndcdn.com/artworks-000292251036-ozzjbq-t300x300.jpg',
                duration: 7206448,
                stream_url: 'https://api.soundcloud.com/tracks/390535887/stream',
                title: 'Tiger & Woods - 28th January 2018',
                uri: 'https://api.soundcloud.com/tracks/390535887',
                user: {
                  avatar_url: 'https://i1.sndcdn.com/avatars-000309386640-840197-large.jpg',
                  id: 338690,
                  permalink_url: 'http://soundcloud.com/rinsefm',
                  uri:'https://api.soundcloud.com/users/338690',
                  username: 'Rinse FM'
                }
              }
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Player selectedTrack={this.state.selectedTrack}/>
                <div className="mt-5">
                    <Tracks />
                </div>
            </div>
        );
    }
}
