import React, { Component } from 'react';
import TrackList from './TrackList';
//import TrackService from '../../services/TrackService';

export default class Tracks extends Component {

    constructor() {
        super();

        this.state = {
            tracks: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ tracks: TrackService.getTracks() }));
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