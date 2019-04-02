import React, { Component } from 'react'
import { View, Image} from 'react-native'

const ImagesExample = () => (
   <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }}>
   <Image source = {{uri:'http://www.thapar.edu/images/hostel/hostelH_2.png'}}
   style = {{  height: 200 }}
   />
   </View>
)
export default ImagesExample