import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MainPage from './components/main_page';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MainPage/>
      </View>
    );
  }
}