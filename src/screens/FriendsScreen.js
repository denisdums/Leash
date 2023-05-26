import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FriendList from "../components/user/FriendList";
import FriendChat from "../components/user/FriendChat";

export default function FriendsScreen({navigation}) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FriendsList" component={FriendList}/>
            <Stack.Screen name="FriendChat" component={FriendChat}/>
        </Stack.Navigator>
    )
}