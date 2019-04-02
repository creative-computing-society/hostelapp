import React from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import ImagesExample from '../assets/hostelpic.js';
import ImagesExample1 from '../assets/messpic.js';
import Hostelpage from '../components/Hostelpage.js';
import Messpage from '../components/Messpage.js';


export default class MainPage extends React.Component {
 
  render() {
    return (
    <ScrollView>

            <Card containerStyle = {{borderRadius: 10, backgroundColor: '#DAE0E2'}}
     
    >
    <ImagesExample />
    <Button
      
      buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000'}}
      title='HOSTEL'
      />
  </Card>



  <Card containerStyle = {{borderRadius: 10,  backgroundColor: '#DAE0E2'}}
    >
     
     <ImagesExample1 />
    <Button
      
      buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#000' }}
      title='MESS'/>
  </Card>

    </ScrollView>


  
    
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
