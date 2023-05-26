import {Text, View} from "react-native";
import Icon from "../Icon";
import {tabStyles} from "../../../assets/styles/tabs";

export default function MapTab({route, focused}) {
    return (
        <View style={tabStyles.wrapper}>
            <Icon name="map" isActive={focused}/>
            <Text style={{...tabStyles.text, ...(focused ? tabStyles.textFocused : {})}}>
                Mon monde
            </Text>
        </View>
    )
}