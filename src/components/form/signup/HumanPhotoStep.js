import {View, Text} from "react-native";
import {fieldStyles, fontStyles, globalStyles} from "../../../../assets/styles/styles";
import Field from "../Field";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";

const HumanPhotoStep = forwardRef(({values, onChange}, ref) => {

    const [userImage, setUserImage] = useState(values?.userImage ?? null);
    const [userImageError, setUserImageError] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange({userImage});
        }
    });

    useImperativeHandle(ref, () => ({verify}));

    return (
        <View>
            <View style={globalStyles.flexRow}>
                <Text style={fontStyles.heading}> Une petite photo ?</Text>
            </View>
            <Text style={fontStyles.bodyText}>pour terminer, montrez nous votre plus beau cliché !</Text>
            <View style={{...fieldStyles.wrapper}}>
                <Field type={'image'}
                       value={userImage}
                       error={userImageError}
                       errorText={'Veuillez ajouter une photo'}
                       onChange={(userImage) => {
                           setUserImage(userImage);
                           setUserImageError(false);
                       }}/>
            </View>
        </View>
    )

    function verify() {
        const userImageCheck = userImage !== null;
        if (!userImageCheck) {
            setUserImageError(true);
        }
        return userImageCheck;
    }
});

export default HumanPhotoStep;