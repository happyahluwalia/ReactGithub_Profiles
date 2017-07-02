import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouter from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


import Home from './home';
import Battle from './battle';
import Nav from './nav';
import Popular from './popular';

class App extends Component {
    render() {
        console.log(navigator.language);
        return (
            <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/battle' component={Battle} />
                    <Route path='/popular' component={Popular} />
                    <Route render={function() {return <p>404 route not found </p>}} />
                </Switch>
            </div>
            </Router>
        );
    }
}

App.propTypes = {

};

export default App;