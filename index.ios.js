/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Main from './app/components/Main'
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  }
});

export default class githubnote extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Git Hub Note',
          component: Main
        }}/>
    );
  }
}



AppRegistry.registerComponent('githubnote', () => githubnote);
