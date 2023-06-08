import {View, Text} from "react-native";
import {colorStyles, fieldStyles, fontStyles, globalStyles} from "../../../../assets/styles/styles";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import Field from "../Field";

const DogInfosStep = forwardRef(({values, onChange}, ref) => {
    const dogName = values?.dogName ?? null
    const [dogDate, setDogDate] = useState(values?.dogDate ?? null);
    const [dogDescription, setDogDescription] = useState(values?.dogDescription ?? null);
    const [dogDateError, setDogDateError] = useState(null);
    const [dogDescriptionError, setDogDescriptionError] = useState(null);

    useEffect(() => {
        if (onChange) {
            onChange({dogDate, dogDescription});
        }
    });

    useImperativeHandle(ref, () => ({verify}));

    return (
        /***
         * Returns View component with Field component for dogDate and dogDescription
         */
        <View>
            <View style={globalStyles.flexRow}>
                <Text style={fontStyles.heading}> Enchanté </Text>
                <Text style={{...fontStyles.heading, ...colorStyles.yellow}}>{dogName} !</Text>
            </View>
            <Text style={fontStyles.bodyText}>complétons maintenant ton toutou-profil !</Text>
            <View style={{...fieldStyles.wrapper}}>
                <Field placeholder={'00/00/0000'}
                       value={dogDate}
                       label={'Quel est sa date de naissance ? 🐶'}
                       type={'date'}
                       error={dogDateError}
                       errorText={'La date de naissance est obligatoire'}
                       onChange={(dogDate) => {
                           setDogDateError(false);
                           setDogDate(dogDate)
                       }}/>
                <Field placeholder={'C’est une bonne situation ça, toutou ?'}
                       label={'Une petite description'}
                       value={dogDescription}
                       type={'textarea'}
                       error={dogDescriptionError}
                       errorText={'La description est obligatoire'}
                       onChange={(dogDescription) => {
                           setDogDescriptionError(false);
                           setDogDescription(dogDescription)
                       }}/>
            </View>
        </View>
    )

    function verify() {
        const dogDateCheck = dogDate !== null;
        const dogDescriptionCheck = dogDescription !== null;

        if (!dogDateCheck) {
            setDogDateError(true);
        }
        if (!dogDescriptionCheck) {
            setDogDescriptionError(true);
        }

        return dogDateCheck && dogDescriptionCheck;
    }
});

export default DogInfosStep;