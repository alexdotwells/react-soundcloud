import React, {Component} from 'react';

class Track extends React.Component {
  render() {
    const {details, index} = this.props

    return(
      <li className="track-item">
        {details.title}
      </li>
    )
  }
}

export default Track;
