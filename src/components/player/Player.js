import React from 'react';
import Timestamps from './Timestamps';
import Scrubber from './Scrubber'
import Controls from './Controls';

class Player extends React.Component {

  constructor() {
    super();

    this.state = {
      playStatus: 'play',
      currentTime: 0
    }

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    let status = this.state.playStatus;
    let audio = document.querySelector('audio');
    //console.log(audio);
    if(status === 'play') {
      status = 'pause';
      audio.play();
    } else {
      status = 'play';
      audio.pause()
    }
    this.setState({playStatus:status});
  }



  render() {

    return (
      <div className="player">
        <div className="art" style={{'backgroundImage': 'url(' + this.props.selectedTrack.artwork_url + ')'}}></div>
        <div className="track-info">
          <h3>{this.props.selectedTrack.title}</h3>
        </div>
        <Scrubber />
        <Controls isPlaying={this.state.playStatus} onClick={this.togglePlay}/>
        <Timestamps duration={this.props.selectedTrack.duration} currentTime={this.state.currentTime} />
        <audio><source src={this.props.selectedTrack.stream_url+'?client_id=aa43f640526cb3f753a3a2ce40a340b4'} /></audio>
    </div>
    )
  }
}

export default Player;
