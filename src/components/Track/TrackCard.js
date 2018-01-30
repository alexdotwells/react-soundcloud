import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';

const TrackCard = (props) => (
    <div className="track-card">
        <div className="track-card card">
            <img className="card-img-top" src={props.track.artwork_url} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.track.title}</h4> 
                <h6 className="card-subtitle mb-2 text-muted">{props.track.user.username}</h6>       
                <p className="text-justify" style={{fontSize: '14px'}}>{props.track.duration}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <StarRating rating={props.track.rating} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.track.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

TrackCard.defaultProps = {
    track: {}
};

TrackCard.propTypes = {
    track: PropTypes.object
};

export default TrackCard;