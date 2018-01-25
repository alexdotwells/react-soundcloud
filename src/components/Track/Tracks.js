import React, { Component } from 'react';
import TrackList from './TrackList';
import SoundCloudService from '../../services/SoundCloudService';

export default class Tracks extends Component {

    constructor() {
        super();

        this.state = {
            tracks: []
        };
    }

    async componentDidMount() {
        const tracklist = await SoundCloudService.getFavorites();
        this.setState(() => ({ tracks: tracklist }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <TrackList tracks={this.state.tracks} />
                    </div>
                </div>
            </div>
        );
    }
}