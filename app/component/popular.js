import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

class Popular extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage  : 'All'
        }

       this.setLanguage = this.setLanguage.bind(this); 
    }

    setLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        })
    }
    render() {
        
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.setLanguage} />
            </div>
        );
    }
}

Popular.propTypes = {

};

export default Popular;