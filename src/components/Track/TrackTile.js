import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';

const TrackTile = (props) => (
    <div className="track-tile">
        <div className="track-tile tile">
            <img className="tile-img-top" src={props.track.artwork_url} alt="" />
            <div className="tile-body">
                <h4 className="tile-title">{props.track.title}</h4>
                <h6 className="tile-subtitle mb-2 text-muted">{props.track.user.username}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.track.description}</p>
            </div>
            <div className="tile-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <StarRating rating={props.track.rating} />
                    </div>
                    <div className="tile-footer-badge float-right badge badge-primary badge-pill">{props.track.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

TrackTile.defaultProps = {
    track: {}
};

TrackTile.propTypes = {
    track: PropTypes.object
};

export default TrackTile;