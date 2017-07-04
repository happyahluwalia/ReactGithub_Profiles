import React, { Component } from 'react';
import PropTypes from 'prop-types';
var style = {
    context : {
        "fontSize": "30px",
        "textAlign": "center"
    }
}
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : props.text
        }

    }

    componentDidMount() {
        var stopper = this.props.text + '...';
        this.interval = window.setInterval(function(){
                                if(this.state.text===stopper){
                                    this.setState(function(){
                                        return {
                                            text : this.props.text
                                        }
                                    })
                                }else {
                                    this.setState(function(prevState){
                                        return {
                                            text : prevState.text + '.'
                                        }
                                    })
                                }
                            }.bind(this),this.props.speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p style={style.context}>{this.state.text}</p>
            </div>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
    text: 'Patience',
    speed: 500
}

export default Loading;