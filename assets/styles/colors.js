import {StyleSheet} from "react-native";

const colors = {
    purple: "#3C37FF",
    purpleTone: "#E8E8FF",
    yellow: "#FFC337",
    yellowTone: "#FCE1A2",
    orange: "#E1785E",
    orangeTone: "#FFE7E1",
    pink: "#BD0C68",
    pinkTone: "#FBDDEC",
    black: "#000000",
    grey: "#E2E2E2",
    greyTone: "#EDEDED",
    white: "#FFFFFF",
    transparent: "transparent",
    green: "#36FFB7",
    greenTone: "#E1FFF4",
    red: "#FF365A",
    redTone: "#FFE1E7",
}

const colorStyles = StyleSheet.create({
    purple: {
        color: colors.purple,
    },
    purpleTone: {
        color: colors.purpleTone,
    },
    yellow: {
        color: colors.yellow,
    },
    yellowTone: {
        color: colors.yellowTone,
    },
    orange: {
        color: colors.orange,
    },
    orangeTone: {
        color: colors.orangeTone,
    },
    pink: {
        color: colors.pink,
    },
    pinkTone: {
        color: colors.pinkTone,
    },
    black: {
        color: colors.black,
    },
    grey: {
        color: colors.grey,
    },
    white: {
        color: colors.white,
    }
})

export {colors, colorStyles};
