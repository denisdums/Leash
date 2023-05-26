import {View, Text} from "react-native";
import Field from "../Field";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {fieldStyles, fontStyles, globalStyles} from "../../../../assets/styles/styles";

const HumanInfosStep = forwardRef(({values, onChange}, ref) => {
    const [userName, setUserName] = useState(values?.userName ?? null);
    const [userEmail, setUserEmail] = useState(values?.userEmail ?? null);
    const [userPassword, setUserPassword] = useState(values?.userPassword ?? '');
    const [userPasswordVerify, setUserPasswordVerify] = useState(values?.userPasswordVerify ?? '');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange({userName, userEmail, userPassword, userPasswordVerify});
        }
    });

    useImperativeHandle(ref, () => ({verify}));

    return (
        <View>
            <View style={globalStyles.flexRow}>
                <Text style={fontStyles.heading}> Et vous ? </Text>
            </View>
            <Text style={fontStyles.bodyText}>bien sur nous voulons vous connaitre vous aussi !</Text>
            <View style={{...fieldStyles.wrapper}}>
                <Field placeholder={'ex: Jean Dupont'}
                       label={'Quel est votre nom ? '}
                       value={userName}
                       error={nameError}
                       errorText={'Veuillez renseigner votre nom'}
                       onChange={(userName) => {
                           setUserName(userName);
                           setNameError(false);
                       }}/>
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
                <Field label={'Confirmation du mot de passe'}
                       type={'password'}
                       error={passwordError}
                       errorText={'Veuillez renseigner un mot de passe valide'}
                       onChange={(userPasswordVerify) => {
                           setUserPasswordVerify(userPasswordVerify);
                           setPasswordError(false);
                       }}/>
            </View>
        </View>
    )

    function verify() {
        const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$');
        const passwordCheck = userPassword === userPasswordVerify && userPassword !== '' && userPasswordVerify !== '';
        const emailCheck = emailRegex.test(userEmail) && userEmail !== null && userEmail !== '';
        const nameCheck = userName !== null && userName !== '';

        if (!passwordCheck) {
            setPasswordError(true);
        }
        if (!emailCheck) {
            setEmailError(true);
        }
        if (!nameCheck) {
            setNameError(true);
        }

        return emailCheck && passwordCheck && nameCheck;
    }
});

export default HumanInfosStep;