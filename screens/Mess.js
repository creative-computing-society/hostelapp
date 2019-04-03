
import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Button
// } from "react-native";
// import React from 'react';
import { Alert, View, TouchableOpacity
  ,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions ,
} from 'react-native';
import {  ListItem, Button, Icon } from 'react-native-elements';
import {  Card, CardItem } from 'native-base'
import ImagesExample from '../assets/hostelpic.js';
import ImagesExample1 from '../assets/messpic.js';
import Hostelpage from '../components/Hostelpage.js';
import Messpage from '../components/Messpage.js';
import Menudisplay from '../screens/Menudisplay.js';
import Category from './components/Explore/Category'
import RecommendedCardItem from './components/Explore/RecommendedCardItem'
const { height, width } = Dimensions.get('window')
class Mess extends Component {
    render() {
        return (
        <ScrollView>
<SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    {/* <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View> */}
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you with ?
                            </Text>

                            <View style={{ height: 230, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                <TouchableOpacity  onPress={() => {this.props.navigation.navigate("hostelentrypage");
            }}>
                                    <Category imageUri={require('../assets/hostelpic.jpg')}
                                        name="Hostel Room"
                                    />
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("Messentrypage");
            }}>
                                    <Category imageUri={require('../assets/restaurant.jpg')}
                                        name="This Weeks Mess Menu"
                                    
                                    />
                    </TouchableOpacity>
                                    <Category imageUri={require('../assets/importantcontacts.jpg')}
                                        name="Hostel Contacts"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Today's meals 
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                “We should look for someone to eat and drink with before looking for something to eat and drink.”

                                </Text>
                                <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        {/* <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
                          
                        </CardItem> */}
<TouchableOpacity  onPress={() => {this.props.navigation.navigate("Menudisplay");
            }}>
                        <RecommendedCardItem
                            itemName="BreakFast"
                            // itemCreator="Louise Hay"
                            itemPrice="Monday"
                            // savings="2.5"
                            imageUri={require("../assets/breakfst.jpg")}
                           

                        />
                        </TouchableOpacity>
                        </Card>
                        <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <RecommendedCardItem
                            itemName="Lunch"
                            // itemCreator="Sony"
                            itemPrice="Monday"
                            // savings="17"
                            imageUri={require("../assets/lunch.jpg")}
                            

                        />
                        </Card>
                        <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <RecommendedCardItem
                            itemName="Dinner"
                            // itemCreator="Ea Sports"
                            itemPrice="Monday"
                            // savings="6"
                            imageUri={require("../assets/dinner.jpg")}
                            

                        />



                    </Card>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/thaparbanner.jpg')}
                                    />
                                    

                                </View>
                        
                            </View>
                        </View>
                    </ScrollView>

                </View>
               
            </SafeAreaView>
            </ScrollView>

    //         <View style={styles.container}>
    //             <Text>Mess</Text>
            //     <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Messentrypage");
            // }}>
     
    // </TouchableOpacity>
    //             {/* <Button title="Go to mess Page" 
    // onPress={() => {this.props.navigation.navigate("Messentrypage");
    //         }}/> */}
    //          <Text>Hostel</Text>
    //             <Button title="Go to hostel Page" 
    // onPress={() => {this.props.navigation.navigate("hostelentrypage");
    //         }}/>
    //         </View>
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











// <ScrollView backgroundColor="#ff7675">
// <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Messentrypage");
//             }}>
//             {
  
//   <Card containerStyle = {{borderRadius: 10,  backgroundColor: '#DAE0E2'}}
//     >
     
//      <ImagesExample1 />
//     <Button
      
//       buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000' }}
//       title='MESS'/>
//   </Card>
// }
//   </TouchableOpacity>
//   <TouchableOpacity  onPress={() => {this.props.navigation.navigate("hostelentrypage");
//             }}>
//    <Card containerStyle = {{borderRadius: 10, backgroundColor: '#DAE0E2'}}
     
//      >
//      <ImagesExample />
//      <Button
       
//        buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000'}}
//        title='HOSTEL'
//        />
//    </Card> 
//    </TouchableOpacity>
//     </ScrollView>
