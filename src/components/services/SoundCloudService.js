// import SC from 'soundcloud';
//
// export function scInit() {
//         // Initialize SoundCloud Client
//         SC.initialize({
//             client_id: 'aa43f640526cb3f753a3a2ce40a340b4',
//             redirect_uri: 'http://localhost:3000/callback'
//
//         });
//         // Save to state
//         this.setState(() => ({ scInitialized: true }));
//         this.setState(() => ({ tracks: [] }));
//
//         // Define Fetch
//         this.fetchFavorites = () => {
//
//             const userId = 63317612;
//             const url = this.state.scInitialized ? this.state.nextHref : `/users/${userId}/favorites`;
//             console.log(url);
//             // Get User Favorites tracklist
//             SC.get(url,{
//                 limit: 3000,
//                 linked_partitioning: 1
//
//             }).then(res => {
//                 // Get tracklist from state
//                 var tracklist = this.state.tracks.slice();
//
//                 // Get tracks array from SC API response
//                 var collection = res.collection.slice();
//
//                 // Concat existing tracklist and new SC track collection
//                 tracklist = tracklist.concat(collection);
//
//                 // Save to state
//                 this.setState(() => ({ tracks: tracklist }));
//                 this.setState(() => ({ nextHref: res.next_href }));
//
//             }).catch(err => {
//                 // ERMAHGERD!!
//                 console.log(`ERROR ${err}`);
//             });
//
//         };
//     }
//
// export function getTracks() {
//         // Initialize Soundcloud
//         if (this.state.scInitialized !== true) {
//             this.scInit();
//         }
//
//         // Fetch user favorites
//         this.fetchFavorites();
// }

import React, { Component } from 'react';
import SC from 'soundcloud';
import Track from '../Track.js';

class Favorites extends Component {

    constructor() {
        super();

        this.state = {
            scInitialized: false,
            tracks: [],
            nextHref: ''
        };

        this.getTracks = this.getTracks.bind(this);
        this.scInit = this.scInit.bind(this);
        this.asyncCall = this.asyncCall.bind(this);
    }

    componentDidMount() {
      //this.getTracks();
      this.asyncCall();
    }

    componentWillReceiveProps(nextProps) {
      console.log('here');
      console.log(nextProps);
      this.getTracks();

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

            const userId = 63317612;
            const url = this.state.scInitialized ? this.state.nextHref : `/users/${userId}/favorites`;
            console.log(url);
            // Get User Favorites tracklist
            SC.get(url,{
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
            this.scInit();
        }

        // Fetch user favorites
        this.fetchFavorites();
    }

    resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

    render() {
        return (
            <div className="text-center">
                <div className="favorites">
                {

                    Object
                      .keys(this.state.tracks)
                      .map(key => <Track key={key} index={key} details={this.state.tracks[key]} />)

                }
                </div>
            </div>
        );
    }
}

export default Favorites;
