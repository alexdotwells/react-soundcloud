import React, { Component } from 'react';
import SC from 'soundcloud';

class Favorites extends Component {

    constructor() {
        super();

        this.state = {
            scInitialized: false,
            tracks: [],           
            nextHref: ''
        };
      
        this.scInit = this.scInit.bind(this);
        this.getTracks = this.getTracks.bind(this);
        this.getFavorites = this.getFavorites.bind(this);

        this.scInit();
    }

    scInit() {
        // Initialize SoundCloud Client
        SC.initialize({
            client_id: 'aa43f640526cb3f753a3a2ce40a340b4',
            redirect_uri: 'http://localhost:3000/callback'

        });
        // Save to state
        this.setState(() => ({ scInitialized: true }));
        this.setState(() => ({ tracks: [] }));

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

    getFavorites() {
        var userId = 63317612;
        var collection = [];

        // Get User Favorites tracklist
        SC.get(`/users/${userId}/favorites`,{
            limit: 300,
            linked_partitioning: 1
            
        }).then(res => {
            // Get tracks array from SC API response
            collection = res.collection.slice();

        }).catch(err => {
            // ERMAHGERD!!
            console.log(`ERROR ${err}`);           
        });

        // Return SC Favorites (collection of Tracks)
        return collection;
    }

    getTracks() {
        // Initialize Soundcloud
        if (this.state.scInitialized !== true) {
            this.scInit();
        }

        // Fetch user favorites
        this.fetchFavorites();
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

export default Favorites;