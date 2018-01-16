import React, { Component } from 'react';
import SC from 'soundcloud';

class Tracks extends Component {

    constructor() {
        super();

        this.state = {
            scInitialized: false,
            tracks: [],           
            nextHref: ''
        };

        this.setState(() => ({ tracks: [] }));
        
        this.getTracks = this.getTracks.bind(this);
        this.scInit = this.scInit.bind(this);
    }

    scInit() {
        // Initialize SoundCloud Client
        SC.initialize({
            client_id: '##CLIENT_ID##',
            redirect_uri: 'http://localhost:3000/callback'

        });
        // Save to state
        this.setState(() => ({ scInitialized: true }));
    }

    getTracks() {
        var userId = 63317612;

        // Initialize Soundcloud
        if (this.state.scInitialized !== true) {
            this.scInit();
        }

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

        })
            // ERMAHGERD!!
            .catch(err => {
                console.log(`ERROR ${err}`);
            });
    }

    render() {
        return (
            <div className="text-center">
                <button onClick={this.getTracks} className="init-btn btn btn-outline-success btn-lg" type="button">
                    Get Tracklist!
                </button> 
            </div>
        );
    }
}

export default Tracks;