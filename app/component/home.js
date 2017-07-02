import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <h1>Get ready for the Github Battle</h1>
                <Link className="button" to='/battle'>Battle</Link>
                
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;