import {colors} from "./colors";
import {StyleSheet} from "react-native";

const gap = 8;
const stepperStyles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: -gap / 2,
    },
    item: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: colors.purple,
        marginHorizontal: gap / 2,
    }
});

export {stepperStyles};