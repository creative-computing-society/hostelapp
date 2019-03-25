import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default class Messentrypage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mess entry page </Text>
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