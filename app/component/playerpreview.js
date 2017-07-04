import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PlayerPreview(props) {
    return (
        <div>
            <div className="repoInfo">
                 <img className="repoImage" 
                        src={props.image} 
                        alt={"Image of " + props.username}/>
                <h3 className="repoName">@{props.username}</h3>
            </ div>
            {props.children}
        </div>
    )
}

PlayerPreview.propTypes = {
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default PlayerPreview;