import {Text, View} from "react-native";
import Icon from "../Icon";
import {tabStyles} from "../../../assets/styles/tabs";

export default function FriendsTab({route, focused}){
    /***
     * Returns View component with tab icon and text
     */
    return (
        <View style={tabStyles.wrapper}>
            <Icon name="paw" isActive={focused}/>
            <Text style={{...tabStyles.text, ...(focused ? tabStyles.textFocused : {})}}>
                Copains
            </Text>
        </View>
    )
}