import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import propTypes from 'prop-types';

import App from './component/app';
require('./index.css');

ReactDOM.render(<App />, document.getElementById('app'));


/*
class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.img}</h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.img}</h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img}/>
        <Label img={this.props.user.name}/>
        <ScreenName img={this.props.user.username} />
      </div>
    )
  }
}

Badge.propTypes = {
    name: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    username: propTypes.string.isRequired
}

ReactDOM.render(
  <Badge user={{
    name: 'Harpreet',
    img: 'https://avatars2.githubusercontent.com/u/8081182?v=3&s=400',
    username: 'happyahluwalia'
  }} />,
  document.getElementById('app')
);*/