import {Image, Text, View, StyleSheet} from "react-native";
import Container from "../Container";
import {fontStyles} from "../../../assets/styles/styles";

export default function FriendChat({navigation, route: {params: {user}}}) {

    return (
        <Container>
            <View style={styles.header.wrapper}>
                <Image source={{uri: user.userImage}} style={styles.header.image}/>
                <View>
                    <Text>Messages avec</Text>
                    <Text style={{...fontStyles.heading}}>{user.name} & {user.petName}</Text>
                </View>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    header: {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        image: {
            width: 70,
            height: 70,
            borderRadius: 60,
            marginRight: 8,
        }
    },

});