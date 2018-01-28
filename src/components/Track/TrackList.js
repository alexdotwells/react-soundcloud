import React from 'react';
import PropTypes from 'prop-types';
import TrackCard from './TrackCard';

const getTracks = (tracks) => {
    return (
        <div className="card-deck">
            {
                tracks.map(track => <TrackCard key={track.id} track={track} />)
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