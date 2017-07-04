import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerInput from './playerinput';
import PlayerPreview from './playerpreview';



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
                                username = {this.state.playerOneName}>
                            <button className="reset"
                                onClick={this.doReset.bind(null, "playerOne")}>Reset</button>        
                        </PlayerPreview> }

                    {!this.state.playerTwoName &&
                        <PlayerInput id="playerTwo"
                             label="Player Two"
                             onSubmit={this.handleSubmit} />}   

                     {playerTwoImage != null &&
                         <PlayerPreview image={playerTwoImage} 
                                username = {this.state.playerTwoName}>
                            <button className="reset"
                                onClick={this.doReset.bind(null, "playerTwo")}>Reset</button>        
                        </PlayerPreview> }
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