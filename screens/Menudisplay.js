import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import Menucard from './components/Explore/Menucard'
import { Card, CardItem, Right } from 'native-base'

export default class Menudisplay extends Component {
    render() {
        return (
            <ScrollView  style={{}}>
          <View>

<View style={{alignItems:"center"}}>
     <Text style={{ fontSize: 24, fontWeight: '700' }}>
                Meal Info
            </Text>
            </View>


            <CardItem>
            <View style={{ margintop:30 ,flex:1,flexDirection:"row"}}>
                <View style={{}}>
                <Image style={{ height: 32, width: 32 }}
        source={require('../assets/calender11.png')} />
                </View>
                <View style={{}}>
                <Text style={{ marginLeft:20,fontSize:20}}>DAY -</Text>
                </View>
                <View style={{}}>
                <Text style={{  marginLeft:5 ,fontSize: 20, fontWeight: 'bold', color: '#c4402f' }}>Monday</Text>
                </View>
                </View>
</CardItem>


<CardItem>
            <View style={{ margintop:30 ,flex:1,flexDirection:"row"}}>
                <View style={{}}>
                <Image style={{ height: 32, width: 32 }}
        source={require('../assets/meal11.png')} />
                </View>
                <View style={{}}>
                <Text style={{ marginLeft:20,fontSize:20}}>Meal-</Text>
                </View>
                <View style={{}}>
                <Text style={{  marginLeft:5 ,fontSize: 20, fontWeight: 'bold', color: '#c4402f' }}>Breakfast</Text>
                </View>
                </View>
</CardItem>

<CardItem>
            <View style={{ margintop:30 ,flex:1,flexDirection:"row"}}>
                <View style={{}}>
                <Image style={{ height: 32, width: 32 }}
        source={require('../assets/time11.png')} />
                </View>
                <View style={{}}>
                <Text style={{ marginLeft:20,fontSize:20}}>Time-</Text>
                </View>
                <View style={{}}>
                <Text style={{  marginLeft:5 ,fontSize: 20, fontWeight: 'bold', color: '#c4402f' }}>7:00-9:00 AM</Text>
                </View>
                </View>
</CardItem>
<CardItem style={{}}>
            <View style={{ margintop:30 ,flex:1,flexDirection:"row"}}>
                <View style={{}}>
                <Image style={{ height: 32, width: 32 }}
        source={require('../assets/menu11.png')} />
                </View>
                <View style={{}}>
                <Text style={{ marginLeft:20,fontSize:20}}>Menu-</Text>
                </View>
                <View style={{width:200}}>
                <Text style={{  marginLeft:5 ,fontSize: 20, fontWeight: 'bold', color: '#7B8788' }}>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</Text>
                </View>
                
                </View>
</CardItem>

          </View>
          </ScrollView>
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