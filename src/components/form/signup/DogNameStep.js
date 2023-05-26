import {Text, View} from "react-native";
import {fontStyles, fieldStyles} from "../../../../assets/styles/styles";
import Field from "../Field";
import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";

const DogNameStep = forwardRef(({values, onChange}, ref) => {
    const [dogName, setDogName] = useState(values?.dogName ?? null);
    const [dogNameError, setDogNameError] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange({dogName});
        }
    });

    useImperativeHandle(ref, () => ({verify}));

    return (
        <View>
            <Text style={fontStyles.heading}>Salut !</Text>
            <Text style={fontStyles.bodyText}>prenons quelques instants pour se présenter. !</Text>
            <View style={fieldStyles.wrapper}>
                <Field placeholder={'ex: Samy'}
                       label={'Quel est le nom de ton compagnon ? 🐶'}
                       value={dogName}
                       error={dogNameError}
                       errorText={'Le nom de du compagnon est obligatoire'}
                       onChange={(dogName) => {setDogNameError(false); setDogName(dogName)}}/>
            </View>
        </View>
    )

    function verify() {
        const dogNameCheck = dogName !== null && dogName !== '';
        if (!dogNameCheck) setDogNameError(true);
        return dogNameCheck;
    }
});

export default DogNameStep;