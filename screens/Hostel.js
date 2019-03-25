
import React, { Component} from "react";
import { createBottomTabNavigator,createAppContainer,StackNavigator } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Platform,
    StatusBar,
    Image
} from "react-native";
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base'
class Mess extends Component {
 
    render() {
        return (
            <View style={styles.container}>
               <Text>Hostel</Text>
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
    },
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
            }
        })
    }
});