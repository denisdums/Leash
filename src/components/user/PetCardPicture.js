import {Image, StyleSheet} from "react-native";

export default function PetCardPicture({user}){
    const image = user.petImages[0];

    return (
        <Image source={{uri: image}} style={styles.wrapper}/>
    )
}

const styles = StyleSheet.create({
  wrapper: {
      width: 100,
      height: 100,
      borderRadius: 10,
  }
})