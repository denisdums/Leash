import {globalStyles} from "../../assets/styles/globals";
import {SafeAreaView, Text, View} from "react-native";

export default function Container({children, style}) {
    return (
        /***
         * Returns View component with children
         * it also has globalStyles container and style
         * it helps to keep the same style for all containers
         */
        <SafeAreaView>
            <Text>{style}</Text>
            <View style={{...globalStyles.container, ...style}}>
                {children}
            </View>
        </SafeAreaView>
    )
}