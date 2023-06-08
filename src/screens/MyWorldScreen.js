import {StyleSheet, Text} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../contexts/StoreContext";
import {useIsFocused} from "@react-navigation/native";
import {colors} from "../../assets/styles/colors";

export default function MyWorldScreen({navigation}) {
    const isFocused = useIsFocused();
    const store = useContext(StoreContext);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        /***
         * Sets latitude and longitude from current user's location in store
         */
        if (!store.location) return;
        setLatitude(store.location.coords.latitude);
        setLongitude(store.location.coords.longitude);
    }, [isFocused]);


    if (!latitude || !longitude) return (
        /***
         * Displays loading text if latitude or longitude are null
         */
        <Text>Chargement de la carte...</Text>
    )

    return (
        /***
         * Displays MapView with current user's location
         */
        <MapView
            style={{height: '100%'}}
            region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {/***
             * Displays markers of user's location
             */}
            <Marker coordinate={{latitude: latitude, longitude: longitude}}
                    title={'Vous'} description={'Vous êtes ici'}/>

            {/***
             * Displays markers for each main spots around user's location
             * TODO: Get spots from API
             */}
            <Marker coordinate={{latitude: 50.638781495109896, longitude: 3.0482671920498423}}
                    title={'Zoo de Lille'} description={'Superbe pour se promener'} pinColor={colors.purple}/>
        </MapView>
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