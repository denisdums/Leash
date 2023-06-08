import Container from "../components/Container";
import {useContext} from "react";
import {StyleSheet, View} from "react-native";
import PetGallery from "../components/user/PetGallery";
import UserImage from "../components/user/UserImage";
import UserNames from "../components/user/UserNames";
import UserManagment from "../components/user/UserManagment";
import PetDescription from "../components/user/PetDescription";
import {StoreContext} from "../contexts/StoreContext";

export default function ProfileScreen({navigation}) {
    /***
     * Retrieves user from StoreContext
     */
    const {user} = useContext(StoreContext);

    /***
     * Returns null if user is null
     */
    if (!user) return null;

    /***
     * Returns ProfileScreen
     */
    return (
        <Container>
            <View style={styles.centerContainer}>
                <UserImage user={user} style={{marginBottom: 16}}/>
                <UserNames user={user}/>
            </View>
            <PetGallery user={user}/>
            <PetDescription user={user}/>
            <UserManagment/>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});