import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";


class Mess extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mess</Text>
                <Button title="Go to mess Page" 
    onPress={() => {this.props.navigation.navigate("Messentrypage");
            }}/>
             <Text>Hostel</Text>
                <Button title="Go to hostel Page" 
    onPress={() => {this.props.navigation.navigate("hostelentrypage");
            }}/>
            </View>
        );
    }
}
 export default Mess;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});