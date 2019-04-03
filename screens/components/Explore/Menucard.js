import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { Card, CardItem, Right } from 'native-base'
import Menudisplay from '../../Menudisplay'

class Menucard extends Component {
    render() {
        return (
            <View style={{  marginLeft: 5, marginRight: 5,marginBottom:20,borderWidth: 0.5, borderColor: '#dddddd' }}>
                 <View style={{  paddingLeft: 10, paddingTop: 10 ,alignItems:"center"}}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>{this.props.name1}</Text>
                </View>
                 <CardItem>
                

                <View style={{flex:1,flexDirection:"row",justifyContent:"space-evenly"}}>
                
                <View style={{alignItems:"center"}}>
                    <Image style={{ height: 90, width: 90 }}
                        source={this.props.imageUri1} />
                        <Text > Breakfast</Text>
                </View>
               
                <View style={{alignItems:"center"}}>
                    <Image style={{ height: 90, width: 90  }}
                        source={this.props.imageUri2} />
                        <Text > Lunch</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <Image style={{ height: 90, width: 90  }}
                        source={this.props.imageUri3} />
                        <Text> Dinner</Text>
                </View>
                </View>
         
            </CardItem>
            </View>
            
        );
    }
}
export default Menucard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});