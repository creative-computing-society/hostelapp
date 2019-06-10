import React, { Component } from "react";
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
  import { Card, CardItem, Right } from 'native-base'
  const { height, width } = Dimensions.get('window')

class Postsociety extends Component {
    render() {
        return (
           


<View style={{ height: 330, width: width ,borderWidth: 0.5, borderColor: '#dddddd' }}>
               
<View style={{ flex: 0.25, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.societyname}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 0.25, paddingLeft: 10, paddingTop: 10 ,borderWidth: 0.5, borderColor: '#dddddd'}}>
                    <Text>{this.props.name}</Text>
                </View>
                <View style={{ flex: 0.75, paddingLeft: 10, paddingRight:10,paddingTop: 10,borderWidth: 0.5, borderColor: '#dddddd' }}>
                    <Text>{this.props.content1}</Text>
                </View>
            </View>
          
        );
    }
}
export default Postsociety;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});