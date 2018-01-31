import React from 'react';
import Timestamps from './Timestamps.js'

class Player extends React.Component {

  constructor() {
    super();
    this.props = {
      track: {
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
    this.state = {
      playStatus: 'play',
      currentTime: 0
    }

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    let status = this.state.playStatus;
    let audio = document.getElementById('audio');
    if(status === 'play') {
      status = 'pause';
      audio.play();
    } else {
      status = 'play';
      audio.pause()
    }
    this.setState({playStatus:staus});
  }



  render() {
    return (
      <div className="player">
        <div className="art" style={{'backgroundImage': 'url(' + this.props.track.artwork_url + ')'}}></div>
        <TrackInformation track={this.props.track} />
        <Scrubber />
        <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay}/>
        <Timestamps duration={this.props.track.duration} currentTime={this.state.currentTime} />
        <audio><source src={this.props.track.stream_url} /></audio>
    </div>
    )
  }
}

export default Player;
