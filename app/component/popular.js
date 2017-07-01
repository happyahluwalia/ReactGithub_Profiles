import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../utils/api';

function SelectLanguage(props){
    var languages = ['All', 'Javascript', 'Java', 'Swift', 'Ruby', 'CSS', 'Python' ];
    return (     
        <div>
            <ul className='languages'>
                {languages.map(language => {
                    return (
                            <li
                                style = {language === props.selectedLanguage ? {color:'red'} : null} 
                                onClick={props.onSelect.bind(null, language)} 
                                key={language}>
                                {language}
                            </li>
                        );
                })}
                </ul>
        </div>
    )
}
SelectLanguage.propTypes = {
    selectedLanguage : PropTypes.string.isRequired,
    onSelect : PropTypes.func.isRequired
}

function RepoGrid(props){
    return (
        <ul className="repoContainer">
            {
              props.repos.map(function(repo, index){
                    return (
                        <div className="repo" key={repo.id}>
                        <li>
                            <div className="repoRank">
                                #{index + 1} Rank
                            </div>

                            <ul className="repoInfo">
                                <li >
                                    <img className="repoImage" 
                                         src={repo.owner.avatar_url} 
                                         alt="Repo owners image"/>
                                </li>
                                <li className="repoName">
                                    <a href={repo.owner.html_url} >{repo.name}</a>
                                </li>
                                <li className="repoName">
                                    @{repo.owner.login}
                                </li>
                                <li className="repoName">
                                    {repo.stargazers_count} stars
                                </li> 
                            </ul> 
                        </li >
                        </div>
                )
            })}
        </ul>
    )
}
RepoGrid.propTypes = {
    repos : PropTypes.array.isRequired
}

class Popular extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage  : 'All',
            repos: null
        }

       this.setLanguage = this.setLanguage.bind(this); 
    }

    setLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang,
                repos: null
            }
        })
        
        api.fetchPopularRepos(lang)
            .then(function(response){
                this.setState(function() {
                    return {
                        repos:response
                    }
                })
            }.bind(this)); 
    }

    componentDidMount(){
        this.setLanguage(this.state.selectedLanguage);
    }

    render() {
        return (
            <div>
                <SelectLanguage 
                        selectedLanguage={this.state.selectedLanguage} 
                        onSelect={this.setLanguage} 
                />
                {!this.state.repos 
                ? <p>LOADING</p>
                : <RepoGrid repos={ this.state.repos } />}
            </div>
        );
    }
}

Popular.propTypes = {

};

export default Popular;