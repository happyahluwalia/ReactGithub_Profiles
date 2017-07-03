import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInput from './playerinput';
import { Link } from 'react-router-dom';

function PlayerPreview(props) {
    return (
        <div>
            <div className="repoInfo">
                 <img className="repoImage" 
                        src={props.image} 
                        alt={"Image of " + props.username}/>
                <h3 className="repoName">@{props.username}</h3>
            </ div>
            <button className="reset"
                onClick={props.doReset.bind(null, props.id)}>Reset</button>
        </div>
    )
}

PlayerPreview.propTypes = {
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    doReset : PropTypes.func.isRequired
}

class Battle extends Component {
    constructor(props){
        super(props);
         this.state = {
            playerOneName : '',
            playerTwoName : '',
            playerOneImage : null,
            playerTwoImage : null
          }
       this.handleSubmit = this.handleSubmit.bind(this); 
       this.doReset = this.doReset.bind(this);  
    }

    handleSubmit(id, userName){
        this.setState(function() {
            var newState = {};
            newState[id + 'Name'] = userName;
            newState[id + 'Image'] = 'https://github.com/'+ userName + '.png?size=200';
            return newState;
        } )
    }

    doReset(id){
        this.setState(function() {
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        } )
    }
   
    render() {
        
        var playerOneImage = this.state.playerOneImage;
        var playerTwoImage = this.state.playerTwoImage;
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;
        var match = this.props.match;
        return (
            <div>
                <div className="row">
                    {!this.state.playerOneName &&
                        <PlayerInput id="playerOne"
                            label="Player One"
                            onSubmit={this.handleSubmit}/>}
                    
                    {playerOneImage != null &&
                         <PlayerPreview image={playerOneImage} 
                                id="playerOne"
                                username = {this.state.playerOneName}
                                doReset= {this.doReset}
                                />}

                    {!this.state.playerTwoName &&
                        <PlayerInput id="playerTwo"
                             label="Player Two"
                             onSubmit={this.handleSubmit} />}   

                     {playerTwoImage != null &&
                         <PlayerPreview image={playerTwoImage} 
                                id="playerTwo"
                                username = {this.state.playerTwoName}
                                doReset= {this.doReset}
                                />} 
                </div>
                {playerOneImage != null && playerTwoImage != null
                 && <button className="button"><Link to={{
                                    pathname : match.url+'/results',
                                    search: '?playerOneName=' + playerOneName + '&playerTwoName=' +playerTwoName
                                }}>
                                BATTLE</Link></button>
                }
            </div>
        );
    }
}

Battle.propTypes = {
    
};

export default Battle;