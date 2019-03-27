import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MainPage from "./components/MainPage";
export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <MainPage />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
