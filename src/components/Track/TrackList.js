import React from 'react';
import PropTypes from 'prop-types';
import TrackTile from './TrackTile';

const getTracks = (tracks) => {
    return (
        <div className="tile-stack">
            {
                tracks.map(track => <TrackTile key={track.id} track={track} />)
            }
        </div>
    );
};

const TrackList = (props) => (
    <div>
        {getTracks(props.tracks)}
    </div>
);

TrackList.defaultProps = {
    tracks: []
};

TrackList.propTypes = {
    tracks: PropTypes.array
};

export default TrackList;