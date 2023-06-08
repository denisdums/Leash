import {View, Text} from 'react-native'
import Field from "../Field";
import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {colorStyles, fieldStyles, fontStyles, globalStyles} from "../../../../assets/styles/styles";

const DogGalleryStep = forwardRef(({values, onChange}, ref) => {

    const dogName = values?.dogName ?? null;
    const [dogImages, setDogImages] = useState(values?.dogImages ?? []);
    const [dogImagesError, setDogImagesError] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange({dogImages});
        }
    });

    useImperativeHandle(ref, () => ({verify}));


    return (
        /***
         * Returns View component with Field component for dogImages
         */
        <View>
            <View style={globalStyles.flexRow}>
                <Text style={fontStyles.heading}> On veut voir </Text>
                <Text style={{...fontStyles.heading, ...colorStyles.yellow}}>{dogName} !</Text>
            </View>
            <Text style={fontStyles.bodyText}> ajoutons maintenant les plus beaux clichés de votre compagnon</Text>
            <View style={{...fieldStyles.wrapper}}>
                <Field type={'gallery'}
                       value={dogImages}
                       error={dogImagesError}
                       errorText={'Vous devez ajouter au moins une photo'}
                       onChange={(dogImages) => {
                           setDogImagesError(false);
                            setDogImages(dogImages);
                       }}/>
            </View>
        </View>
    )

    function verify() {
        const dogImagesCheck = dogImages.length > 0;
        if (!dogImagesCheck) {
            setDogImagesError(true);
        }
        return dogImagesCheck;
    }
});

export default DogGalleryStep;