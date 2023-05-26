import {colors} from "../assets/styles/colors";
import ProfileTab from "../src/components/tabs/ProfileTab";
import HomeTab from "../src/components/tabs/HomeTab";
import FriendsTab from "../src/components/tabs/FriendsTab";
import DefaultTab from "../src/components/tabs/DefaultTab";
import MapTab from "../src/components/tabs/MapTab";

const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        if (route.name === 'Profile') {
            return <ProfileTab route={route} focused={focused}/>
        }
        if (route.name === 'Home') {
            return <HomeTab route={route} focused={focused}/>
        }
        if (route.name === 'Friends') {
            return <FriendsTab route={route} focused={focused}/>
        }
        if (route.name === 'World') {
            return <MapTab route={route} focused={focused}/>
        }

        return <DefaultTab route={route} focused={focused}/>
    },
    tabBarActiveTintColor: colors.purple,
    tabBarInactiveTintColor: colors.black,
    tabBarShowLabel: false,
    headerShown: false,
})

export {screenOptions}
