import {fieldStyles} from "../../../assets/styles/fields";
import {Image, Pressable, View} from "react-native";
import Add from "../../../assets/icons/add.png";
import * as ImagePicker from "expo-image-picker";
import {useEffect, useState} from "react";

export default function GalleryField({value, onChange, max}) {
    const maxImages = max ?? 10;
    const [values, setValues] = useState(value ?? []);

    useEffect(() => {
        if (onChange && values.length > 0) {
            onChange(values);
        }
    });

    return (
        /***
         * Returns View component with gallery field
         */
        <View style={fieldStyles.gallery.wrapper}>
            <Pressable style={fieldStyles.gallery.add} onPress={initMediaPicker}>
                <Image source={Add} style={fieldStyles.gallery.addIcon}/>
            </Pressable>
            {values.map((image, index) => (
                <Image key={index} source={{uri: image.uri}} style={fieldStyles.gallery.image}/>
            ))}
        </View>
    )

    async function initMediaPicker() {
        /***
         * Opens media picker and adds selected images to values
         */
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            if (values.length >= maxImages) {
                if (maxImages === 1) {
                    setValues([result]);
                }
            } else {
                setValues([...values, result]);
            }
        }
    }
}