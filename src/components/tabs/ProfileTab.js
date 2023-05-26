import {View, Text, Image} from "react-native";
import {useContext} from "react";
import {tabStyles} from "../../../assets/styles/tabs";
import {StoreContext} from "../../contexts/StoreContext";

export default function ProfileTab({route, focused}) {
    const {user} = useContext(StoreContext);
    if (!user) return null;

    return (
        <View style={tabStyles.wrapper}>
            <View style={{...tabStyles.profileTab.wrapper, ...(focused ? tabStyles.profileTab.wrapperFocused : {})}}>
                <Image source={{uri: user.userImage}} style={tabStyles.profileTab.image}/>
            </View>
            <Text style={{...tabStyles.text, ...(focused ? tabStyles.textFocused : {})}}>
                Profil
            </Text>
        </View>

    )
}