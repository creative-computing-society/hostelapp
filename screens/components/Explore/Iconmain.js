import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Right } from 'native-base'
class Iconmain extends Component {
    render() {
        return (
           
             <View style={{flex:1,alignItems:"center"}}>
             <Image style={{ height: 54, width: 54 }} source={this.props.imageUriicon} />
             <Text style={{fontWeight:'bold'}}>{this.props.iconname}</Text>
         </View>
        );
    }
}
export default Iconmain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});