import {ActivityIndicator, Pressable, StyleSheet, Text, View} from "react-native";
import Container from "../Container";
import {useIsFocused} from "@react-navigation/native";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import UserService from "../../../services/user.service";
import {colors} from "../../../assets/styles/colors";
import {fontStyles} from "../../../assets/styles/fontStyles";
import {buttonStyles} from "../../../assets/styles/buttons";
import FriendCard from "./FriendCard";

export default function FriendList(){
    const isFocused = useIsFocused();
    const {user} = useContext(StoreContext)
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;
        setLoading(true);
        UserService.getMatchesUsers(user).then((users) => {
            setMatches(users);
            setLoading(false);
        });
    }, [isFocused])

    if (loading) return (
        <Container>
            <View style={{...styles.centerContainer}}>
                <ActivityIndicator size="large" color={colors.purple} />
            </View>
        </Container>
    )

    if (matches.length === 0) return (
        <Container>
            <View style={{...styles.centerContainer}}>
                <Text style={fontStyles.heading}>Oh ! </Text>
                <Text style={{...fontStyles.tallText, marginBottom: 16}}>Tu n'as pas encore trouvé d'amis ?</Text>
                <Pressable style={{...buttonStyles.primary}} onPress={() => navigation.navigate('Home')}>
                    <Text style={{...buttonStyles.primaryText}}>Rechercher des amis !</Text>
                </Pressable>
            </View>
        </Container>
    )

    return (
        <Container>
            {matches.map((match) => {
                return <FriendCard key={match.userUID} user={match}/>
            })}
        </Container>
    )
}


const styles = StyleSheet.create({
    centerContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})