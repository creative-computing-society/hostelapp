import React, { Component } from "react";
import {
    ListView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ScrollView
} from "react-native";

class Messentrypage extends Component {
    render() {
        return (
            <View style={{}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: "center",
                        paddingStart: 15,
                        paddingEnd: 5
                    }}>
                    <ScrollView>
                        <Text
                            style={{
                                marginHorizontal: 10,
                                fontSize: 46,
                                fontFamily: "Monsterrat-medium"
                            }}>
                            Monday
                        </Text>
                        <Text>Hiiasdbsjbeknkanslore lorem ipsum</Text>
                    </ScrollView>

                    <Text
                        style={{
                            marginHorizontal: 10,
                            fontSize: 46,
                            opacity: 0.5,
                            fontFamily: "Monsterrat-medium"
                        }}>
                        Monday
                    </Text>
                    <Text
                        style={{
                            marginHorizontal: 10,
                            fontSize: 46,
                            opacity: 0.5,
                            fontFamily: "Monsterrat-medium"
                        }}>
                        Monday
                    </Text>
                    <Text
                        style={{
                            marginHorizontal: 10,
                            fontSize: 46,
                            opacity: 0.5,
                            fontFamily: "Monsterrat-medium"
                        }}>
                        Monday
                    </Text>
                    <Text
                        style={{
                            marginHorizontal: 10,
                            fontSize: 46,
                            opacity: 0.5,
                            fontFamily: "Monsterrat-medium"
                        }}>
                        Monday
                    </Text>
                </ScrollView>
            </View>
        );
    }
}
export default Messentrypage;
