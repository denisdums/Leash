import {StyleSheet} from "react-native";
import {colors} from "./colors";

const tabStyles = StyleSheet.create({
    profileTab: {
        image: {
            width: 17,
            height: 17,
            borderRadius: 16,
        },
        wrapper: {
            borderRadius: 100,
            borderWidth: 2,
            padding: 1,
            borderColor: colors.grey,
            marginBottom: 1,
        },
        wrapperFocused: {
            borderColor: colors.purple,
        },
    },
    wrapper: {
        marginTop: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        color: colors.black,
    },
    textFocused: {
        color: colors.purple,
    }
});

export {tabStyles};