import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import FormSteps from "../components/form/FormSteps";
import UserInfosSteps from "../components/form/signin/UserInfosSteps";
import UserService from "../../services/user.service";
import SignUpSecondaryButton from "../components/form/signup/SignUpSecondaryButton";

const SignInScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    return (
        <Container>
            <FormSteps onSubmit={submit} endText={'Se connecter'} secondaryButton={<SignUpSecondaryButton/>}>
                <UserInfosSteps onChange={updateUserInfos}/>
            </FormSteps>
        </Container>
    )

    function updateUserInfos({userEmail, userPassword}) {
        setUserEmail(userEmail);
        setUserPassword(userPassword);
    }

    async function submit(){
        const data = await UserService.signIn(userEmail, userPassword);
    }
}

export default SignInScreen;
