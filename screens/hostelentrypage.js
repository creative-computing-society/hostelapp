
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,WebView,
    ScrollView,
    TouchableOpacity
} from "react-native";

import Postsociety from "./components/Postsociety";
// import Postdetails from "../screens/Postdetails"

export default class hostelentrypage extends Component {
    render() {
        return (
           

            <View>
                <ScrollView>
                <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Lastest Society Post's
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                “Know what is happenning in your institute.”

                                </Text>
                                </View>
                                <TouchableOpacity  onPress={() => {this.props.navigation.navigate("Postdetails"); }}>
                <Postsociety
                                        societyname="CCS"                
                imageUri={require('../assets/hostelpic.jpg')}
                                        name="Hostel Room"
                                        content1="Hsaxiusciablckuylc idcbaducvkabcuostel Room"
                                    />
                                    </TouchableOpacity>
                                     <Postsociety
                                        societyname="CCS"                
                imageUri={require('../assets/hostelpic.jpg')}
                                        name="Hostel Room"
                                        content1="Hsaxiusciablckuylc idcbaducvkabcuostel Room"
                                    />
                                    </ScrollView>
            </View>
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