import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInput from './playerinput';

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
    }

    handleSubmit(id, userName){
        console.log(id);
        console.log(userName);
        this.setState(function() {
            var newState = {};
            newState[id + 'Name'] = userName;
            newState[id + 'Image'] = 'https://github.com/'+ userName + '.png?size=200';
            return newState;
        } )
        console.log(this.state.newState);
    }
   
    render() {
        return (
            <div>
                <div className="row">
                    {!this.state.playerOneName &&
                        <PlayerInput id="playerOne"
                            label="Player One"
                            onSubmit={this.handleSubmit}/>}

                    {!this.state.playerTwoName &&
                        <PlayerInput id="playerTwo"
                             label="Player Two"
                             onSubmit={this.handleSubmit} />}    
                </div>
            </div>
        );
    }
}

Battle.propTypes = {
    
};

export default Battle;