import React, { Component } from 'react';
import Header from './Header';
import Tracks from './Tracks/Tracks';

export default class App extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Header title='React SoundCloud (Nolfi Stylee)' />
                <div className="mt-5">
                    <Tracks />
                </div>
            </div>
        );
    }
}
