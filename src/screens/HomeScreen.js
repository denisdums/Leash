import {StyleSheet, View} from "react-native";
import ProfileSwiper from "../components/swiper/ProfileSwiper";
import {useContext} from "react";
import {StoreContext} from "../contexts/StoreContext";

export default function HomeScreen() {
    const {user} = useContext(StoreContext);

    return (
        /***
         * Displays ProfileSwiper on HomeScreen
         */
        <View style={styles.container}>
            <ProfileSwiper user={user}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
})