import ReactDOM from 'react-dom';
import React, { Component } from 'react';
require('./index.css');

class App extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

//export default App;