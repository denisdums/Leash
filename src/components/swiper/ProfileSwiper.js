import {View, StyleSheet, Text} from "react-native";
import Swiper from "react-native-deck-swiper";
import {useEffect, useState} from "react";
import UserService from "../../../services/user.service";
import Loader from "../Loader";
import ProfileSwiperCard from "./ProfileSwiperCard";
import {colors, colorStyles, fontStyles} from "../../../assets/styles/styles";
import Icon from "../Icon";
import {fontWeights} from "../../../assets/styles/fontStyles";

export default function ProfileSwiper({user}) {
    const [swiperUsers, setSwiperUsers] = useState([]);
    const [swiperChoice, setSwiperChoice] = useState(null);
    const [swiperMatch, setSwiperMatch] = useState(false);
    const [swiperIndex, setSwiperIndex] = useState(0);

    useEffect(() => {
        UserService.getSwiperUsers(user).then((users) => setSwiperUsers(users));
    }, [user]);

    if (!swiperUsers) return <Loader/>;

    return (
        <View style={styles.container}>
            <View style={{...styles.marker, ...styles.markerPositive, ...(swiperChoice !== null && swiperChoice ? styles.markerVisible: {})}}>
                <Icon name="checkGreen" style={{...styles.choiceIcon}}/>
            </View>
            <View style={{...styles.marker, ...styles.markerNegative, ...(swiperChoice !== null && !swiperChoice ? styles.markerVisible: {})}}>
                <Icon name="crossRed" style={{...styles.choiceIcon}}/>
            </View>
            <View style={{...styles.match, ...(swiperMatch ? styles.matchVisible : {}) }}>
                <Icon name="pawWhite" style={{...styles.matchIcon}}/>
                <Text style={{...fontStyles.subHeading, ...fontWeights.extraBold, ...colorStyles.white}}>
                    C'est un match !
                </Text>
            </View>
            <Swiper
                cards={swiperUsers}
                renderCard={(user) => <ProfileSwiperCard user={user}/>}
                cardIndex={swiperIndex}
                stackSize={3}
                verticalSwipe={false}
                backgroundColor={colors.transparent}
                onSwiping={(x) => setSwiperChoice(x > 0)}
                onSwipedAborted={resetChoice}
                onSwiped={handleSwiped}
                onSwipedRight={handleLike}
                animateCardOpacity={true}
            >
            </Swiper>
        </View>
    )

    function handleSwiped(index){
        const isBeforeLast = index === swiperUsers.length - 2;
        if (isBeforeLast) {
            UserService.getSwiperUsers(user).then((users) => setSwiperUsers([...swiperUsers,...users]));
            setSwiperIndex(index);
        }
        resetChoice();
    }

    function resetChoice() {
        setSwiperChoice(null);
    }

    async function handleLike(userIndex) {
        const user = swiperUsers[userIndex];
        const {isAMatch} = await UserService.likeUser(user.userUID);
        if (isAMatch) {
            setSwiperMatch(true);
            setTimeout(() => setSwiperMatch(false), 2000);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    marker: {
        width: 124,
        height: 124,
        borderRadius: 124,
        position: 'absolute',
        top: '40%',
        left: "50%",
        marginLeft: -62,
        zIndex: 0,
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
    },
    markerPositive: {
        backgroundColor: colors.greenTone,
        borderColor: colors.green,
    },
    markerNegative: {
        backgroundColor: colors.redTone,
        borderColor: colors.red,
    },
    choiceIcon: {
        width: 48,
        height: 48,
    },
    markerVisible: {
        opacity: .8,
        zIndex: 1,
    },
    match: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        zIndex: 0,
        backgroundColor: colors.purple,
    },
    matchVisible: {
        opacity: 1,
        zIndex: 1,
    },
    matchIcon: {
        width: 64,
        height: 64,
    }
});