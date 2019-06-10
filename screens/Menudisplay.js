import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Menucard from "./components/Explore/Menucard";
import { Card, CardItem, Right } from "native-base";
import axios from "axios";

const serverUrl = "http://172.31.116.250:5000";
const http = axios.create({
    baseURL: serverUrl
});
export default class Menudisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "sunday",
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        http.post("/v1.0/fetch_menu", {
            hostel: "h",
            week: "1",
            day: "monday",
            category: "breakfast"
        })
            .then(response => JSON.stringify(response))
            .then(response => {
                // this.setState({ data: response });
                // this.setState({ loading: false });
                console.log("here");
                console.log(JSON.parse(response).data.timings);
                this.setState({ data: JSON.parse(response).data });
                this.setState({ loading: false });
            })
            .catch(function(error) {
                console.log("this is the error" + error);
            });

        // fetch("http://10.0.3.2/v1.0/fetch_menu", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         hostel: "h",
        //         week: "1",
        //         day: "monday",
        //         category: "breakfast"
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({ data });
        //         this.setState({ loading: false });
        //         console.log("here");
        //         console.log(data);
        //     })
        //     .catch(function(error) {
        //         console.log(
        //             "There has been a problem with your fetch operation: " +
        //                 error.message
        //         );
        //     });
    }
    render() {
        return (
            <View>
                {!this.state.loading ? (
                    <ScrollView style={{}}>
                        <View>
                            <View style={{ alignItems: "center" }}>
                                <Text
                                    style={{ fontSize: 24, fontWeight: "700" }}>
                                    Meal Info
                                </Text>
                            </View>

                            <CardItem>
                                <View
                                    style={{
                                        margintop: 30,
                                        flex: 1,
                                        flexDirection: "row"
                                    }}>
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 32, width: 32 }}
                                            source={require("../assets/calender11.png")}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 20
                                            }}>
                                            DAY -
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "#c4402f"
                                            }}>
                                            Monday
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>

                            <CardItem>
                                <View
                                    style={{
                                        margintop: 30,
                                        flex: 1,
                                        flexDirection: "row"
                                    }}>
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 32, width: 32 }}
                                            source={require("../assets/meal11.png")}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 20
                                            }}>
                                            Meal-
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "#c4402f"
                                            }}>
                                            Breakfast
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>

                            <CardItem>
                                <View
                                    style={{
                                        margintop: 30,
                                        flex: 1,
                                        flexDirection: "row"
                                    }}>
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 32, width: 32 }}
                                            source={require("../assets/time11.png")}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 20
                                            }}>
                                            Time-
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "#c4402f"
                                            }}>
                                            {this.state.data.timings}
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>
                            <CardItem style={{}}>
                                <View
                                    style={{
                                        margintop: 30,
                                        flex: 1,
                                        flexDirection: "row"
                                    }}>
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 32, width: 32 }}
                                            source={require("../assets/menu11.png")}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={{
                                                marginLeft: 20,
                                                fontSize: 20
                                            }}>
                                            Menu-
                                        </Text>
                                    </View>
                                    <View style={{ width: 200 }}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                color: "#7B8788"
                                            }}>
                                            {this.state.data.food}
                                        </Text>
                                    </View>
                                </View>
                            </CardItem>
                        </View>
                    </ScrollView>
                ) : (
                    <View>
                        <Text>WAIT KAR</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
