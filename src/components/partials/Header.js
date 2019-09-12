import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header style={this.headerStyle}>
        <h3>TODO Application</h3>
      </header>
    );
  }

  headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign:'center',
    padding: '10px'

  };
}
