import {Image, StyleSheet, View} from "react-native";
import {colors} from "../../../assets/styles/colors";

export default function UserImage({user, style}) {
    return (
        <View style={{...styles.container, ...(style ? style : {})}}>
            <View style={styles.imageWrapper}>
                {user.userImage && <Image source={{uri: user.userImage}} style={styles.image}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageWrapper: {
        padding: 2,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.purple
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    }
});