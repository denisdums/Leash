import {Image, View, StyleSheet} from "react-native";
import {fieldStyles} from "../../../assets/styles/fields";

export default function PetGallery({user}){

    return (
        <View style={{...fieldStyles.gallery.wrapper, ...styles.container}}>
            {user.petImages && user.petImages.map((image, index) => {
                return <Image source={{uri: image}} style={fieldStyles.gallery.image} key={index}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 32,
    }
});