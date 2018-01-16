import React, { Component } from 'react';
import Header from './Header';
import Favorites from '../services/soundcloud/Favorites';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'React SoundCloud (Nolfi Stylee)'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Favorites />
                </div>
            </div>
        );
    }
}