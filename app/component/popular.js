import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        console.log(this);
        var languages = ['All', 'Javascript', 'Java', 'Swift', 'Ruby', 'CSS', 'Python' ];
        return (
            
            <div>
                <p>selected language {this.state.selectedLanguage}</p> 
                <ul className='languages'>
                    {languages.map(language => {
                        return (
                             <li
                                style = {language === this.state.selectedLanguage ? {color:'red'} : null} 
                                onClick={this.setLanguage.bind(null,language)} 
                                key={language}>
                                {language}
                             </li>
                            );
                    })}
                    </ul>
            </div>
        );
    }
}

Popular.propTypes = {

};

export default Popular;