import React, { Component } from 'react';
import Track from './Track.js';

class Favorites extends Component {
    render() {
      <div className="favorites">
      {
        Object
          .keys(this.state.tracks)
          .map(key => <Track key={key} index={key} details={this.state.tracks[key]} />)
      }
      </div>
    }
}

export default Favorites;
