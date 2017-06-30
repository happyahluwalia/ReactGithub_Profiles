import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(friend){
          return <li>{friend}</li>
        })}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('list')
);