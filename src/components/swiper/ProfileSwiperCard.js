import {View, StyleSheet, Text, Image} from "react-native";
import {colorStyles, fontStyles} from "../../../assets/styles/styles";
import {fontWeights} from "../../../assets/styles/fontStyles";
import {LinearGradient} from "expo-linear-gradient";
import * as PropTypes from "prop-types";

function Tex(props) {
    return null;
}

Tex.propTypes = {children: PropTypes.node};
export default function ProfileSwiperCard({user}) {

    if (!user) return null;

    const firstPetImage = user.petImages[0];

    return (
        <View style={styles.wrapper}>
            <View style={styles.card}>
                <Image source={{uri:firstPetImage}} style={styles.image}/>
                <LinearGradient colors={gradientColors} style={styles.cardInfos}>
                    <Text style={{...fontStyles.subHeading, ...colorStyles.white, ...fontWeights.extraBold}}>
                        {user.petName}
                    </Text>
                    <Text style={{...fontStyles.tallText, ...colorStyles.white, marginBottom: 16}}>
                        {user.getPetAge()}
                    </Text>
                    <Text style={{...fontStyles.bodyText, ...colorStyles.white}}>
                        {user.petDescription}
                    </Text>
                    <View style={styles.userInfosWrapper}>
                        <Text style={{...fontStyles.smallText, ...colorStyles.white}}>{user.name}</Text>
                        {user.userImage && <Image source={{uri:user.userImage}} style={styles.userImage}/>}
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: 32,
    },
    card: {
        flex: 1,
        borderRadius: 16,
        overflow: "hidden",
        marginVertical: 10,
        justifyContent: "center",
        backgroundColor: "white"
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cardInfos: {
        position: "absolute",
        width: '100%',
        bottom: 0,
        padding: 16,
    },
    userInfosWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    userImage: {
        width: 24,
        height: 24,
        borderRadius: 24,
        marginLeft: 8,
    }
});

const gradientColors = ['transparent', 'rgba(0,0,0,0.8)'];