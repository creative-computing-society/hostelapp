import React from "react";
import { View, Image, Dimensions, Keyboard } from "react-native";
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from "react-native-ui-kitten";

import { scaleModerate, scaleVertical } from "./components/scale";

export class LoginV1 extends React.Component {
    renderImage = () => {
        const screenSize = Dimensions.get("window");
        const imageSize = {
            width: screenSize.width,
            height: screenSize.height - scaleModerate(375, 1)
        };
        return (
            <Image
                style={[styles.image, imageSize]}
                source={this.getThemeImageSource(RkTheme.current)}
            />
        );
    };

    onLoginButtonPressed = () => {
        this.props.navigation.goBack();
    };

    onSignUpButtonPressed = () => {
        this.props.navigation.navigate("SignUp");
    };

    render = () => (
        <RkAvoidKeyboard
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => Keyboard.dismiss()}
            style={styles.screen}>
            {this.renderImage()}
            <View style={styles.container}>
                <RkTextInput rkType="rounded" placeholder="Username" />
                <RkTextInput
                    rkType="rounded"
                    placeholder="Password"
                    secureTextEntry
                />
                <RkButton
                    style={styles.save}
                    rkType="large"
                    onPress={this.onLoginButtonPressed}
                    text="LOGIN"
                />
                <View style={styles.footer}>
                    <View style={styles.textRow}>
                        <RkText rkType="primary3">
                            Don’t have an account?
                        </RkText>
                        <RkButton rkType="clear">
                            <RkText
                                rkType="header6"
                                onPress={this.onSignUpButtonPressed}>
                                Sign up now
                            </RkText>
                        </RkButton>
                    </View>
                </View>
            </View>
        </RkAvoidKeyboard>
    );
}

const styles = RkStyleSheet.create(theme => ({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.screen.base
    },
    image: {
        resizeMode: "cover",
        marginBottom: scaleVertical(10)
    },
    container: {
        paddingHorizontal: 17,
        paddingBottom: scaleVertical(22),
        alignItems: "center",
        flex: -1
    },
    footer: {
        justifyContent: "flex-end",
        flex: 1
    },
    buttons: {
        flexDirection: "row",
        marginBottom: scaleVertical(24)
    },
    button: {
        marginHorizontal: 14
    },
    save: {
        marginVertical: 9
    },
    textRow: {
        justifyContent: "center",
        flexDirection: "row"
    }
}));


<Menucard
                        name1="MONDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="TUESDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="WEDNESDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="THURSDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="FRIDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="SATURDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="SUNDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
    />
                    









                    import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Menucard from "./components/Explore/Menucard";
import { Card, CardItem, Right } from "native-base";

export default class Messentrypage extends Component {
    render() {
        return (
            <ScrollView>
                <Card
                    style={{
                        marginLeft: 5,
                        marginRight: 5
                    }}>
                    {/* <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
      
    </CardItem> */}
                    <View style={{ alignItems: "center" }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "700"
                            }}>
                            This week's menu
                        </Text>
                        <Text
                            style={{
                                fontWeight: "100",
                                marginTop: 10
                            }}
                        />
                    </View>
                    <Menucard
                        name1="MONDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="TUESDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="WEDNESDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="THURSDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="FRIDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="SATURDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                    <Menucard
                        name1="SUNDAY"
                        imageUri1={require("../assets/breakfst.jpg")}
                        imageUri2={require("../assets/lunch.jpg")}
                        imageUri3={require("../assets/dinner.jpg")}
                    />
                </Card>
            </ScrollView>
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
