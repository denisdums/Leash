import {Text, View, StyleSheet} from "react-native";
import Icon from "../Icon";
import {fontStyles} from "../../../assets/styles/styles";

export default function PetDescription({user, style}) {
    return (
        /***
         * Returns View component with pet description and paw icon
         */
        <View style={styles.container}>
            <Icon name="paw" style={styles.icon}/>
            <Text style={fontStyles.tallText}>
                {user.petDescription}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 16,
    },
    icon: {
        marginRight: 8
    }
})