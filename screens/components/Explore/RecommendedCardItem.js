import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Right } from 'native-base'
class RecommendedCardItem extends Component {
    render() {
        return (
           
            <CardItem >

             <View>
                 <Image style={{ flex:1, height: 64, width: 64,alignItems:"center" }}
                     source={this.props.imageUri} />
             </View>
             <Right style={{ flex: 3, alignItems: 'flex-start', height: 70, paddingHorizontal: 20 ,alignItems:"center"}}>
                 <Text style={{fontSize:20, fontWeight: 'bold'}}>{this.props.itemName1}</Text>
                 
                 <Text style={{ fontSize: 16, color: 'black' }}>{this.props.itemPrice1}</Text>
                 
             </Right>
             </CardItem>
        );
    }
}
export default RecommendedCardItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});