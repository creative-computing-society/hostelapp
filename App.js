import React from "react";
import { Component } from "react";
import { Font } from "expo";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    Dimensions
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    DrawerItems
} from "react-navigation";

import Mess from "./screens/Mess";
import Messentrypage from "./screens/Messentrypage";
import hostelentrypage from "./screens/hostelentrypage";
import Menudisplay from "./screens/Menudisplay.js";
import Menucard from "./screens/components/Explore/Menucard";

import Notifications from "./screens/Notifications";
import Postdetails from "./screens/Postdetails";
import Postsociety from "./screens/components/Postsociety";

const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
        <View
            style={{
                height: 150,
                backgroundColor: "white",
                alignItems: "center"
            }}>
            <Image
                source={require("./assets/hostel.png")}
                style={{
                    height: 120,
                    width: 120,
                    borderRadius: 60,
                    marginTop: 30
                }}
            />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

//  rootstack= createBottomTabNavigator({
//  Home: {
//     screen: Mess,
//     navigationOptions: {
//       tabBarLabel: 'MESS/HOSTEL',
//       tabBarIcon: ({ tintColor }) => (
//         <Image source={require('./assets/messicon.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   },
/*

! hey this isnt working
? any issue?
TODO refactor the code
*/

//   Notifications: {
//     screen: Notifications,
//     navigationOptions: {
//       tabBarLabel: 'INBOX',
//       tabBarIcon: ({ tintColor }) => (
//         <Image source={require('./assets/notification.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
//       )
//     }
//   }

// }, {
//     tabBarOptions: {
//       activeTintColor: 'orange',
//       inactiveTintColor: 'grey',
//       style: {
//         backgroundColor: 'white',
//         borderTopWidth: 0,
//         shadowOffset: { width: 5, height: 3 },
//         shadowColor: 'black',
//         shadowOpacity: 0.5,
//         elevation: 5
//       }
//     }

//   })
//   const DashboardStackNavigator = createStackNavigator(
//     {
//       DashboardTabNavigator:rootstack
//     },{
//       defaultNavigationOptions:{
// headerTintColor:"#FFF",
// headerStyle:{
//   backgroundColor:"#BA2F16"
// },headerTitleStyle:{
//   color:"#FFF"
// }

//       }
//     }

//   );
const DashboardStackNavigator = createStackNavigator(
    {
        // DashboardTabNavigator: rootstack,
        // extra:{
        //   screen:Notifications}
        // ,
        Mess: {
            screen: Mess
        },
        Messentrypage: {
            screen: Messentrypage
        },
        hostelentrypage: {
            screen: hostelentrypage
        },
        Menudisplay: {
            screen: Menudisplay
        },
        Postdetails: {
            screen: Postdetails
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                ),
                headerStyle: {
                    backgroundColor: "#C21818"
                },
                headerTitle: "Thapar Hostel App",
                color: "white"
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        menu: {
            screen: DashboardStackNavigator
        },
        Home: {
            screen: Mess
        },
        Notifications: {
            screen: Notifications
        },
        extra: {
            screen: Notifications
        }
    },
    { contentComponent: CustomDrawerComponent }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
const AppContainer = createAppContainer(AppDrawerNavigator);
class App extends Component {
    componentDidMount() {
        Font.loadAsync({
            "Monsterrat-bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf")
        });
        Font.loadAsync({
            "Monsterrat-medium": require("./assets/fonts/Montserrat/Montserrat-Medium.ttf")
        });
    }
    render() {
        return <AppContainer />;
    }
}
export default App;
