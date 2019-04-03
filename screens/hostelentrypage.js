
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,WebView
} from "react-native";

export default class hostelentrypage extends Component {
    render() {
        return (
            <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            
          />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});