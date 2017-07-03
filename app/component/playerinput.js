import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(event){
        var value = event.target.value;
       
        this.setState(function(){
            return {username : value};
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.props.id,this.state.username);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="formColumn">
                    <label 
                        htmlFor="username"
                        className="header">{this.props.label}
                        </label>
                    <input type="text" 
                            placeholder="Github Username"
                            id="username" 
                            autoComplete = "off"
                            value={this.state.username}
                            onChange={this.handleOnChange}/>
                    <br/>
                    <button type="Submit"
                            className="button"
                            disabled={!this.state.username}>
                        Submit
                    </button>     
                </form>
            </div>
        );
    }
}

PlayerInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onSubmit : PropTypes.func.isRequired
}

export default PlayerInput;