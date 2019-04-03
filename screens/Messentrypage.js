
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import Menucard from './components/Explore/Menucard'
import { Card, CardItem, Right } from 'native-base'

export default class Messentrypage extends Component {
    render() {
        return (
            <ScrollView>
           
            <Card style={{ marginLeft: 5, marginRight: 5 }}>
    {/* <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
      
    </CardItem> */}
    <View style={{alignItems:"center"}}>
     <Text style={{ fontSize: 24, fontWeight: '700' }}>
                This week's menu 
            </Text>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
            </Text>
            </View>
    <Menucard
        name1="MONDAY"
       
        imageUri1={require("../assets/breakfst.jpg")}
        imageUri2={require("../assets/lunch.jpg")}
        imageUri3={require("../assets/dinner.jpg")}
       

    />
    <Menucard
        name1="TUESDAY"
       
        imageUri1={require("../assets/breakfst.jpg")}
        imageUri2={require("../assets/lunch.jpg")}
        imageUri3={require("../assets/dinner.jpg")}
       

    />
 <Menucard
        name1="WEDNESDAY"
       
        imageUri1={require("../assets/breakfst.jpg")}
        imageUri2={require("../assets/lunch.jpg")}
        imageUri3={require("../assets/dinner.jpg")}
       

    /> 
    <Menucard
    name1="THURSDAY"
   
    imageUri1={require("../assets/breakfst.jpg")}
    imageUri2={require("../assets/lunch.jpg")}
    imageUri3={require("../assets/dinner.jpg")}
   

/>
 <Menucard
        name1="FRIDAY"
       
        imageUri1={require("../assets/breakfst.jpg")}
        imageUri2={require("../assets/lunch.jpg")}
        imageUri3={require("../assets/dinner.jpg")}
       

    /> 
    <Menucard
    name1="SATURDAY"
   
    imageUri1={require("../assets/breakfst.jpg")}
    imageUri2={require("../assets/lunch.jpg")}
    imageUri3={require("../assets/dinner.jpg")}
   

/>
<Menucard
        name1="SUNDAY"
       
        imageUri1={require("../assets/breakfst.jpg")}
        imageUri2={require("../assets/lunch.jpg")}
        imageUri3={require("../assets/dinner.jpg")}
       

    />
    
    </Card>
    

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