import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  PermissionsAndroid,
  Share,
} from 'react-native';

import StyleRules from './App.style.js';

const styles = StyleSheet.create(StyleRules);

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  onClick = () => {
    const geoUrl = 'https://showtheway.io/to/' +
      this.state.latitude + ',' + this.state.longitude;

    Share.share({
      message: 'Come over, catch me at: ' + geoUrl,
      url: geoUrl,
      title: 'Come over, catch me at ...'
    }, {
      // Android only:
      dialogTitle: 'Come Over',
      // iOS only:
      excludedActivityTypes: []
    })
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.title}
        >
          Come Over, find me at ...
        </Text>
        <Text>
          Latitude: {this.state.latitude}
          </Text>
        <Text>
          Longitude: {this.state.longitude}
        </Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

        <Button
          onPress={() => this.onClick()}
          title="Share"
        />
      </View>
    );
  }
}
