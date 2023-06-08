import {buttonStyles} from "../../assets/styles/styles";
import {Image, Pressable, Text} from "react-native";
import back from "../../assets/icons/back.png";

export default function Back({onPress}) {

    return (
        /***
         * Returns Image component with back icon for header
         */
        <Pressable onPress={onPress}>
            <Image source={back} style={buttonStyles.backIcon}/>
        </Pressable>
    )
}