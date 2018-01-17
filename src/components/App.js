import React, { Component } from 'react';
import Header from './Header';
// import Tracks from './Tracks/Tracks';
import SC from 'soundcloud';

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            scInitialized: false,
            tracks: [],
            nextHref: ''
        };

        this.getTracks = this.getTracks.bind(this);
        this.scInit = this.scInit.bind(this);
    }

    //helper functions
    scInit() {
        // Initialize SoundCloud Client
        SC.initialize({
            client_id: '##CLIENT_ID##',
            redirect_uri: 'http://localhost:3000/callback'

        });
        // Save to state
        this.setState(() => ({ scInitialized: true }));

        // Define Fetch
        this.fetchFavorites = () => {

            var userId = 63317612;
            // Get User Favorites tracklist
            SC.get(`/users/${userId}/favorites`,{
                limit: 3000,
                linked_partitioning: 1

            }).then(res => {
                // Get tracklist from state
                var tracklist = this.state.tracks.slice();

                // Get tracks array from SC API response
                var collection = res.collection.slice();

                // Concat existing tracklist and new SC track collection
                tracklist = tracklist.concat(collection);

                // Save to state
                this.setState(() => ({ tracks: tracklist }));
                this.setState(() => ({ nextHref: res.next_href }));

            }).catch(err => {
                // ERMAHGERD!!
                console.log(`ERROR ${err}`);
            });

        };
    }

    getTracks() {
        // Initialize Soundcloud
        if (this.state.scInitialized !== true) {
            console.log('init');
            this.scInit();
        }

        // Fetch user favorites
        this.fetchFavorites();
    }

    render() {
        return (
            <div>
                <Header title='React SoundCloud (Nolfi Stylee)' />
                <div className="mt-5">
                    <button onClick={this.getTracks} className="init-btn btn btn-outline-success btn-lg" type="button">
                      Get Tracklist!
                    </button>
                </div>
            </div>
        );
    }
}
