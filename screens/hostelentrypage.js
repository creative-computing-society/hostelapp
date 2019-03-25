import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default class hostelentrypage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>hostel entry page </Text>
            </View>
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