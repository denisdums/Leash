import {Text, View, StyleSheet, Image, Pressable} from "react-native";
import {colors, fontStyles} from "../../../assets/styles/styles";
import {fontWeights} from "../../../assets/styles/fontStyles";
import PetCardPicture from "./PetCardPicture";
import {useNavigation} from "@react-navigation/native";

export default function FriendCard({user}) {
    /***
     * Retrieves navigation object
     */
    const navigation = useNavigation();

    /***
     * Returns View component with pet name, age, description, user name and user image
     */
    return (
        <Pressable style={{...styles.wrapper, marginBottom: 16}} onPress={navigateToChat}>
            <PetCardPicture user={user}/>
            <View style={styles.contentWrapper}>
                <Text style={{...fontStyles.tallText, ...fontWeights.bold}}>{user.petName}</Text>
                <Text style={{...fontStyles.smallText, marginBottom: 8}}>{user.getPetAge()}</Text>
                <Text style={{...fontStyles.smallText}}>{user.petDescription}</Text>
                <View style={styles.userInfosWrapper}>
                    <Text style={{...fontStyles.smallText}}>{user.name}</Text>
                    {user.userImage && <Image source={{uri: user.userImage}} style={styles.userImage}/>}
                </View>
            </View>
        </Pressable>
    )

    function navigateToChat() {
        navigation.navigate('FriendChat', {user: user})
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.greyTone,
        padding: 16,
        borderRadius: 8,

    },
    contentWrapper: {
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    userInfosWrapper: {
        marginTop: 8,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    userImage: {
        width: 24,
        height: 24,
        borderRadius: 24,
        marginLeft: 8,
    }
})