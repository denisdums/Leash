import {Image, StyleSheet, Text, View} from "react-native";
import {colors, colorStyles} from "../../../assets/styles/colors";
import {fontStyles} from "../../../assets/styles/fontStyles";

export default function UserNames({user}) {
    return (
        /***
         * Returns View component with user name and pet name
         */
        <View style={styles.titleWrapper}>
            <Text style={fontStyles.subHeading}>{user.name} & </Text>
            <Text style={{...fontStyles.subHeading, ...colorStyles.yellow}}>{user.petName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});