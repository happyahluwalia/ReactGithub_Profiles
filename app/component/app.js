import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouter from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from './nav';
import Popular from './popular';

class App extends Component {
    render() {
        console.log(navigator.language);
        return (
            <Router>
            <div className='container'>
                <Nav />
                <Route path='/popular' component={Popular} />
            </div>
            </Router>
        );
    }
}

App.propTypes = {

};

export default App;