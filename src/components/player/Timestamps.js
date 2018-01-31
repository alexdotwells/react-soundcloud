import React from 'react';

class Timestamps extends React.Component {
  constructor() {
    super();
    this.convertTime = this.convertTime.bind(this);
  }

  //duration converter
  convertTime(timestamp) {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
    if (seconds < 10) { seconds = '0' + seconds; }
    timestamp = minutes + ':' + seconds;
    return timestamp;
  }
  
  render() {
    return(
      <div className="time-stamps">
        <div className="time time--current">{this.convertTime(this.props.currentTime)}</div>
        <div className="time time--total">{this.convertTime(this.props.duration)}</div>
      </div>
    )
  }
}

export default Timestamps;
