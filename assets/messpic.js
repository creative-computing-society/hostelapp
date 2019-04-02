import React, { Component } from 'react'
import { View, Image } from 'react-native'

const ImagesExample1 = () => (
   <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }}>
   <Image source = {{uri:'http://www.thapar.edu/images/hostel/hostelJ_1.png'}}
   style = {{  height: 200 }}
   />
   </View>
)
export default ImagesExample1