import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import QueryString from 'query-string';

import API from '../utils/api';
import PlayerPreview from './playerpreview';

function PlayerResult(props){
    return (
        <div className="repoInfo">
            <h1 >{props.label}</h1>
            <h2><b>Score:</b> {props.score}</h2>
            <PlayerPreview image={props.avataar} 
                           username = {props.username}>
                      {props.username && <li><b>Username:</b> {props.username}</li>}
                      
                      {props.followers && <li><b>Followers:</b> {props.followers}</li>}
                      {props.repos && <li ><b>Repos:</b> {props.repos}</li>}     
            </PlayerPreview>
            </ div>
    )

}

PlayerResult.propTypes = {
    label: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avataar: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    followers: PropTypes.string.isRequired,
    repos:PropTypes.string.isRequired
}

class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            winner: null,
            loser:null,
            loading:true
        }
    }

    componentDidMount(){
        var players = QueryString.parse(this.props.location.search);
        
        API.battle([players.playerOneName, players.playerTwoName])
                .then(function(result){
                    console.log(result);
                    if(result ===null){
                       return this.setState(function(){
                         return  {
                                error: 'There was an error, please check names of both participants',
                                loading: false
                            }
                        })
                    }
                    this.setState(function(){
                        return {
                            error: null,
                            winner: result[0],
                            loser:result[1],
                            loading:false
                        }
                    })
                }.bind(this))
    }

    //http://localhost:8080/battle/results?playerOneName=happ&playerTwoName=h
    render() {
        var loading = this.state.loading;
        var error = this.state.error;
        if (loading === true){
            return <p>Loading</p>
        }
       
       if(error){
           return (
               <div>
                   <p>{error}</p>
                   <Link to={'/battle'}>Reset</Link>
               </div>
           )
       }

        return (
            <div className="resultContainer">
                <PlayerResult   label = "Winner"
                                username = {this.state.winner.profile.login}
                                avataar = {this.state.winner.profile.avatar_url}
                                score = {this.state.winner.score}
                                followers = {'100'}
                                repos = {'50'}
                    />
                <PlayerResult  label = "Loser"
                            username = {this.state.loser.profile.login}
                            avataar = {this.state.loser.profile.avatar_url}
                            score = {this.state.loser.score}
                            followers = {'1000'}
                            repos = {'500'}
                />  

            </div>
        );
    }
}

export default Results;