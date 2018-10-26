import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://ashu2012.github.io/'}}
        style={{marginTop: 20}}
      />
    );
  }
}