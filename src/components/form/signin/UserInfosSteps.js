import {View, Text} from "react-native";
import Field from "../Field";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {fieldStyles, fontStyles, globalStyles} from "../../../../assets/styles/styles";

const UserInfosSteps = forwardRef(({values, onChange}, ref) => {
    const [userEmail, setUserEmail] = useState(values?.userEmail ?? null);
    const [userPassword, setUserPassword] = useState(values?.userPassword ?? '');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange({userEmail, userPassword});
        }
    });

    useImperativeHandle(ref, () => ({verify}));

    return (
        <View>
            <View style={globalStyles.flexRow}>
                <Text style={fontStyles.heading}> De retour ? </Text>
            </View>
            <View style={{...fieldStyles.wrapper}}>
                <Field placeholder={'ex: jean@dupont.fr'}
                       label={'Quel est votre adresse mail ? '}
                       value={userEmail}
                       error={emailError}
                       errorText={'Veuillez renseigner une adresse mail valide'}
                       onChange={(userEmail) => {
                           setUserEmail(userEmail);
                           setEmailError(false);
                       }}/>
                <Field label={'Votre mot de passe'}
                       type={'password'}
                       error={passwordError}
                       errorText={'Veuillez renseigner un mot de passe valide'}
                       onChange={(userPassword) => {
                           setUserPassword(userPassword);
                           setPasswordError(false);
                       }}/>
            </View>
        </View>
    )

    function verify() {
        const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$');
        const passwordCheck = userPassword !== '';
        const emailCheck = emailRegex.test(userEmail) && userEmail !== null && userEmail !== '';

        if (!passwordCheck) {
            setPasswordError(true);
        }
        if (!emailCheck) {
            setEmailError(true);
        }

        return emailCheck && passwordCheck;
    }
});

export default UserInfosSteps;