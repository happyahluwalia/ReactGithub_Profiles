import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Popular from './popular';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        );
    }
}

App.propTypes = {

};

export default App;