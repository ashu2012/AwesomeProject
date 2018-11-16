import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://35.200.217.150/'}}
        style={{marginTop: 20 , marginRight: 10}}
      />
    );
  }
}