import {Text, View} from "react-native";
import Icon from "../Icon";
import {tabStyles} from "../../../assets/styles/tabs";

export default function HomeTab({route, focused}){
    /***
     * Returns View component with tab icon and text
     */
    return (
        <View style={tabStyles.wrapper}>
            <Icon name="home" isActive={focused}/>
            <Text style={{...tabStyles.text, ...(focused ? tabStyles.textFocused : {})}}>
                Accueil
            </Text>
        </View>
    )
}