import {StyleSheet} from "react-native";

const fontStyles = StyleSheet.create({
    heading: {
        fontSize: "38",
        fontWeight: "700",
        fontFamily: "Urbanist_700Bold",
    },
    subHeading: {
        fontSize: "24",
        fontWeight: "600",
        fontFamily: "Urbanist_600SemiBold",
    },
    tallText: {
        fontSize: "20",
        fontWeight: "500",
        fontFamily: "Urbanist_500Medium",
    },
    bodyText: {
        fontSize: "16",
        fontWeight: "400",
        fontFamily: "Urbanist_400Regular",
    },
    smallText: {
        fontSize: "14",
        fontWeight: "400",
        fontFamily: "Urbanist_400Regular",
    }
});

const fontWeights = {
    extraBold: {
        fontWeight: "800",
        fontFamily: "Urbanist_800ExtraBold",
    },
    bold: {
        fontWeight: "700",
        fontFamily: "Urbanist_700Bold",
    },
}

export {fontStyles, fontWeights};
