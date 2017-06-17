/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import App from './App/App';

export default class ComeOverApp extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('ComeOverApp', () => ComeOverApp);
