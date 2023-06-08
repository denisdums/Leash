import {Pressable, Text} from "react-native";
import {buttonStyles} from "../../../../assets/styles/styles";
import {NavigationContext} from "@react-navigation/native";
import {useContext} from "react";

export default function SignUpSecondaryButton(props) {
    const navigation = useContext(NavigationContext);

    /***
     * Handles press on button
     */
    function handlePress() {
        navigation.navigate('SignUp');
    }

    return (
        /***
         * Returns secondary button component and navigates to SignUp screen on press
         */
        <Pressable onPress={handlePress}
                   style={{...buttonStyles.secondary, ...buttonStyles.minWidthButton, marginTop: 16}}>
            <Text style={buttonStyles.secondaryText}>S'inscrire</Text>
        </Pressable>
    )
}