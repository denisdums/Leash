import {View, Text, Image} from "react-native";
import {useContext} from "react";
import {tabStyles} from "../../../assets/styles/tabs";
import {StoreContext} from "../../contexts/StoreContext";

export default function ProfileTab({route, focused}) {
    /***
     * Retrives user from StoreContext and returns View component with tab icon and text
     */
    const {user} = useContext(StoreContext);

    /***
     * If user is not defined, returns null
     */
    if (!user) return null;

    /***
     * Returns View component with tab icon and text
     */
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