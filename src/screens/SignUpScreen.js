import React, {useState} from "react";
import FormSteps from "../components/form/FormSteps";
import DogNameStep from "../components/form/signup/DogNameStep";
import DogInfosStep from "../components/form/signup/DogInfosStep";
import DogGalleryStep from "../components/form/signup/DogGalleryStep";
import HumanInfosStep from "../components/form/signup/HumanInfosStep";
import HumanPhotoStep from "../components/form/signup/HumanPhotoStep";
import UserService from "../../services/user.service";
import SignUpSubmit from "../components/form/signup/SignUpSubmit";
import Container from "../components/Container";
import {dateHelper} from "../../helpers/date.helper";
import SignInSecondaryButton from "../components/form/signin/SignInSecondaryButton";

const SignUpScreen = () => {
    const [dogName, setDogName] = useState(null);
    const [dogDate, setDogDate] = useState(null);
    const [dogDescription, setDogDescription] = useState(null);
    const [dogImages, setDogImages] = useState([]);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userPasswordVerify, setUserPasswordVerify] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (isSubmitting) {
        return (
            /***
             * Displays SignUpSubmit if isSubmitting is true
             */
            <SignUpSubmit/>
        )
    } else {
        return (
            /***
             * Displays FormSteps with DogNameStep, DogInfosStep, DogGalleryStep, HumanInfosStep and HumanPhotoStep
             * Displays different steps depending on the step
             */
            <Container>
                <FormSteps onSubmit={submit} endText={'S\'inscrire'} secondaryButton={<SignInSecondaryButton/>}>
                    <DogNameStep values={dogName} onChange={({dogName}) => setDogName(dogName)}/>
                    <DogInfosStep values={{dogName, dogDate, dogDescription}} onChange={updateDogInfos}/>
                    <DogGalleryStep values={{dogName, dogImages}} onChange={({dogImages}) => setDogImages(dogImages)}/>
                    <HumanInfosStep values={{userName, userEmail, userPassword, userPasswordVerify, userImage}}
                                    onChange={updateHumanInfos}/>
                    <HumanPhotoStep values={{userImage}} onChange={({userImage}) => setUserImage(userImage)}/>
                </FormSteps>
            </Container>
        )
    }

    function updateDogInfos({dogDate, dogDescription}) {
        /***
         * Updates dogDate and dogDescription
         */
        setDogDate(dogDate);
        setDogDescription(dogDescription);
    }

    function updateHumanInfos({userName, userEmail, userPassword, userPasswordVerify, userImage}) {
        /***
         * Updates userName, userEmail, userPassword, userPasswordVerify and userImage
         */
        setUserName(userName);
        setUserEmail(userEmail);
        setUserPassword(userPassword);
        setUserPasswordVerify(userPasswordVerify);
        setUserImage(userImage);
    }

    async function submit() {
        /***
         * Submits user infos to UserService
         */
        setIsSubmitting(true);
        const result = await UserService.registerUserFromSignup({
            name:userName,
            email: userEmail,
            password: userPassword,
            petName: dogName,
            petDate: dateHelper.getDBFormattedDate(dogDate),
            petDescription: dogDescription,
            userImage: userImage[0] ?? null,
            petImages: dogImages,
        });

        if (result) {
            setIsSubmitting(false);
        }
    }
}

export default SignUpScreen;
