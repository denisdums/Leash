import {Pressable, Text} from "react-native";
import {buttonStyles} from "../../../../assets/styles/styles";
import {NavigationContext} from "@react-navigation/native";
import {useContext} from "react";

export default function SignUpSecondaryButton(props) {
    const navigation = useContext(NavigationContext);

    function handlePress() {
        navigation.navigate('SignUp');
    }

    return (
        <Pressable onPress={handlePress}
                   style={{...buttonStyles.secondary, ...buttonStyles.minWidthButton, marginTop: 16}}>
            <Text style={buttonStyles.secondaryText}>S'inscrire</Text>
        </Pressable>
    )
}