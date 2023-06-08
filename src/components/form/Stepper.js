import {colors, stepperStyles} from "../../../assets/styles/styles";
import {View} from "react-native";

export default function Stepper ({currentStep, totalSteps}) {
    return (
        /***
         * Returns stepper component
         */
        <View style={stepperStyles.wrapper}>
            {Array.from(Array(totalSteps).keys()).map((step, index) => {
                return (
                    <View key={index} style={{...stepperStyles.item, backgroundColor: currentStep === index ? colors.purple : colors.purpleTone}}/>
                )
            })}
        </View>
    )
}