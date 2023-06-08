import {buttonStyles} from "../../../assets/styles/buttons";
import {Pressable, Text, StyleSheet, View} from "react-native";
import UserService from "../../../services/user.service";

export default function UserManagment({style}){
    return (
        /***
         * Returns View component with button to logout
         */
        <View style={{...styles.container, ...(style ? style : {})}}>
            <Pressable onPress={handleLogout}
                       style={{...buttonStyles.secondary, ...buttonStyles.fullWidthButton}}>
                <Text style={buttonStyles.secondaryText}>
                    Se déconnecter
                </Text>
            </Pressable>
        </View>
    )

    async function handleLogout() {
        /***
         * Calls UserService.logout() to logout user
         */
        await UserService.logout()
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 16
    }
});