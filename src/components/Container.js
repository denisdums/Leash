import {globalStyles} from "../../assets/styles/globals";
import {SafeAreaView, Text, View} from "react-native";

export default function Container({children, style}) {
    return (
        <SafeAreaView>
            <Text>{style}</Text>
            <View style={{...globalStyles.container, ...style}}>
                {children}
            </View>
        </SafeAreaView>
    )
}