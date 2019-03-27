import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Messpage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the mess page!</Text>
      </View>
    );
  }
}