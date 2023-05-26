import {Keyboard, Pressable, Text, TouchableWithoutFeedback, View} from "react-native";
import {formStyles} from "../../../assets/styles/form";
import {buttonStyles} from "../../../assets/styles/buttons";
import Stepper from "./Stepper";
import {Children, cloneElement, useRef, useState} from "react";

export default function FormSteps({onSubmit, children, endText, secondaryButton}) {
    const steps = Children.toArray(children);
    const [totalSteps, setTotalSteps] = useState(steps.length ?? 0);
    const [currentStep, setCurrentStep] = useState(0);
    const currentStepRef = useRef(null);
    const currentStepElement = cloneElement(steps[currentStep], {ref: currentStepRef})


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={formStyles.wrapper}>
                <View>
                    {currentStepElement}
                </View>
                <View style={formStyles.footer}>
                    <View>
                        {!isFirstStep() &&
                            <Pressable
                                style={{...buttonStyles.secondary, ...buttonStyles.minWidthButton, marginBottom: 16}}
                                onPress={previousStep}>
                                <Text style={buttonStyles.secondaryText}>{'Précédent'}</Text>
                            </Pressable>
                        }
                        <Pressable style={{...buttonStyles.primary, ...buttonStyles.minWidthButton}} onPress={nextStep}>
                            <Text style={buttonStyles.primaryText}>
                                {isLastStep() ? endText : 'Suivant'}
                            </Text>
                        </Pressable>
                        {isFirstStep() && secondaryButton ? secondaryButton : null}
                    </View>
                    {!isSingleStep() && <Stepper currentStep={currentStep} totalSteps={totalSteps}/>}
                </View>
            </View>

        </TouchableWithoutFeedback>
    )

    function isSingleStep() {
        return totalSteps === 1;
    }

    function isFirstStep() {
        return currentStep === 0;
    }

    function isLastStep() {
        return currentStep === totalSteps - 1;
    }

    function nextStep() {
        if (currentStepRef.current.verify()) {
            if (currentStep < totalSteps - 1 && !isLastStep()) {
                setCurrentStep(currentStep + 1);
            }
            if (isLastStep()) {
                onSubmit();
            }
        }
    }

    function previousStep() {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }
}