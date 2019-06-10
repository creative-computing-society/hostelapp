
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
  Shape
} from 'react-native';
import { Card, CardItem, Right } from 'native-base'
import {  ListItem, Button, Icon } from 'react-native-elements';
import ImagesExample from '../assets/hostelpic.js';
import ImagesExample1 from '../assets/messpic.js';
import Hostelpage from '../components/Hostelpage.js';
import Messpage from '../components/Messpage.js';
import Menudisplay from '../screens/Menudisplay.js';
import Category from './components/Explore/Category'
import RecommendedCardItem from './components/Explore/RecommendedCardItem'
import Iconmain from "./components/Explore/Iconmain.js";
const { height, width } = Dimensions.get('window')
class Mess extends Component {
    render() {
        return (
        <ScrollView>
<SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white'}}>
                          
                            <View style={{ height: 270, backgroundColor:"#C21818"}}>
                            <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10}}>
                                <Image style={{ height: 50, width: 50 }} source={require('../assets/uicon.png')} />
                            <View style={{height:50}}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 10, color:"white" }}>
                                Hello, #name
                            </Text>
                            <Text style={{ fontSize: 12, paddingHorizontal: 10, color:"white" }}>
                                Hostel L -room no-223     
                            </Text></View>


                            
                            </View>
                             <View style={{flexDirection:"row",marginTop:35}}>
                             <View style={{flex:0.4}}></View>
                             <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Messentrypage")}}>
                             <View style={{ flex:1, height: 130,width:130, backgroundColor:"#FFF",borderRadius:100,alignItems:'center',alignSelf:'center'}}> 
                              
                             <Image style={{ height: 110, width: 110 }} source={require('../assets/messnew.png')} />
                             </View></TouchableOpacity>
                             <View style={{flex:0.4}}></View>
                             <View style={{flex:1, height: 130,width:130, backgroundColor:"#FFF",borderRadius:75,alignItems:'center',alignSelf:'center'}}><Image style={{ height: 110, width: 110 }} source={require('../assets/hostelnew.png')} /></View>
                             <View style={{flex:0.4}}></View>
                             </View>
                            </View>
                            
                                                                                                                                                                                                                                                                                                                    


                            <View style={{ height: 130, width:width-40,marginTop:20, marginLeft: 20, marginRight: 20,borderWidth: 2, borderColor: '#dddddd'}}>
                            <View style={{ flex: 0.4, paddingLeft: 10, paddingTop: 5,backgroundColor:"#E4DBDB" ,alignItems:"center" }}>
                    <Text style={{fontWeight:'bold'}}>Latest Notifications</Text>
                </View>
                <View style={{ flex: 1.75,alignItems:"center",marginTop:10  }}>
                <Text style={{alignContent:"center",color:'black',fontWeight:'bold'}}>Holi celebration</Text>
                <Text style={{alignContent:"center"}}>iuvsbclknvmwoybicsn;ml,scuk</Text>
                    
                </View>
                
            </View>

            <View style={{flexDirection:"row", height: 90, width:width-40,marginTop:20,paddingTop:5, marginLeft: 20, marginRight: 20,borderWidth: 2, borderColor: '#dddddd',borderRadius:30,alignItems:"center",paddingHorizontal:5}}>
                            
            <TouchableOpacity style={{flex:1,alignItems:"center"}}  onPress={() => {this.props.navigation.navigate("hostelentrypage");
            }}>
                 <Iconmain
                 imageUriicon={require('../assets/icon1.png')}
                 iconname="Notifications"
               /></TouchableOpacity>  
              <TouchableOpacity style={{flex:1,alignItems:"center"}}  onPress={() => {this.props.navigation.navigate("hostelentrypage");
            }}>
               <Iconmain
                 imageUriicon={require('../assets/icon2.png')}
                 iconname="Contacts"
               /></TouchableOpacity>  
               <TouchableOpacity style={{flex:1,alignItems:"center"}}  onPress={() => {this.props.navigation.navigate("hostelentrypage");
            }}>
               <Iconmain
                 imageUriicon={require('../assets/icon3.png')}
                 iconname="SocietyPosts"
               />
               </TouchableOpacity>
               
               <TouchableOpacity style={{flex:1,alignItems:"center"}} onPress={() => {this.props.navigation.navigate("hostelentrypage");
            }}>
            <Iconmain
                 imageUriicon={require('../assets/icon4.png')}
                 iconname="My Account"
               /></TouchableOpacity>
             


</View>
    
               

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Today's meals 
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                “We should look for someone to eat and drink with before looking for something to eat and drink.”

                                </Text>
                                {/* <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        {/* <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
                          
                        </CardItem> */}



{/* 
<TouchableOpacity  onPress={() => {this.props.navigation.navigate("Menudisplay");
            }}>
                        <RecommendedCardItem
                            itemName="BreakFast"
                            // itemCreator="Louise Hay"
                            itemPrice="Monday"
                            // savings="2.5"
                            imageUri={require("../assets/lunch1.png ")}
                           

                        />

                        </TouchableOpacity>
                        </Card> */} 
                        
                         <Card style={{ marginLeft: 5, marginRight: 5 }} >
                         <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Menudisplay");
            }}>
                        <RecommendedCardItem
                            itemName1="BREAKFAST"
                            itemPrice1="menu will fetch here"
                            imageUri={require('../assets/breakfast1.png')}

                        />       
                        </TouchableOpacity>   
                            
                            </Card>
                            <Card style={{ marginLeft: 5, marginRight: 5 }} >
                         <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Menudisplay");
            }}>
                        <RecommendedCardItem
                            itemName1="LUNCH"
                            itemPrice1="menu will fetch here"
                            imageUri={require('../assets/lunch1.png')}

                        />       
                        </TouchableOpacity>   
                            
                            </Card>
                            <Card style={{ marginLeft: 5, marginRight: 5 }} >
                         <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Menudisplay");
            }}>
                        <RecommendedCardItem
                            itemName1="DINNER"
                            itemPrice1="menu will fetch here"
                            imageUri={require('../assets/dinner1.png')}

                        />       
                        </TouchableOpacity>   
                            
                            </Card>
                                                 
{/*
<Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <RecommendedCardItem
                            itemName="Dinner"
                            // itemCreator="Ea Sports"
                            itemPrice="Monday"
                            // savings="6"
                            imageUri={require("../assets/dinner1.png")}
                            

                        />



                    </Card> */}
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



//extra swiggy
{/* <ScrollView
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
                                                                                                                                                                                                                                                                                                                        </ScrollView> */}