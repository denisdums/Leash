import {useContext} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../../src/screens/HomeScreen";
import SignUpScreen from "../../src/screens/SignUpScreen";
import SignInScreen from "../../src/screens/SignInScreen";
import ProfileScreen from "../../src/screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {screenOptions} from "../../config/navigatorsConfig";
import FriendsScreen from "../../src/screens/FriendsScreen";
import {StoreContext} from "../contexts/StoreContext";
import Loader from "./Loader";
import MyWorldScreen from "../screens/MyWorldScreen";

export default function Root() {
    /***
     * Stack Navigator for Root
     * Displays HomeScreen, FriendsScreen, MyWorldScreen, and ProfileScreen depending on the user's authentication
     * Retrieves store data from StoreContext
     */
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const store = useContext(StoreContext);

    /***
     * Returns Loader if store is updating
     */
    if (store.updating) return <Loader/>;

    return (
        /***
         * Navigation Container for Root depending on the user's authentication
         */
        <NavigationContainer>
            {store.user ? (
                <Tab.Navigator screenOptions={screenOptions}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Friends" component={FriendsScreen}/>
                    <Tab.Screen name="World" component={MyWorldScreen}/>
                    <Tab.Screen name="Profile" component={ProfileScreen}/>
                </Tab.Navigator>) : (
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name="SignIn" component={SignInScreen}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen}/>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
