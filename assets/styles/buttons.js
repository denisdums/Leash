import {colors} from "./colors";
import {StyleSheet} from "react-native";

const buttonStyles = StyleSheet.create({
    primary: {
        alignSelf: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: colors.purple,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Urbanist_700Bold',
    },
    secondary: {
        alignSelf: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: colors.purpleTone,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryText: {
        color: colors.purple,
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Urbanist_700Bold',
    },
    backIcon: {
        width: 34,
        height: 34,
        marginBottom: 16,
    },
    minWidthButton: {
        minWidth: 300,
    },
    fullWidthButton: {
        width: '100%',
    }
});

export {buttonStyles};