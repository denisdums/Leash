import {buttonStyles} from "../../assets/styles/styles";
import {Image, Pressable, Text} from "react-native";
import back from "../../assets/icons/back.png";

export default function Back({onPress}) {

    return (
        <Pressable onPress={onPress}>
            <Image source={back} style={buttonStyles.backIcon}/>
        </Pressable>
    )
}