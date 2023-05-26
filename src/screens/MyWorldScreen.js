import {StyleSheet, Text} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../contexts/StoreContext";
import {useIsFocused} from "@react-navigation/native";

export default function MyWorldScreen({navigation}) {
    const isFocused = useIsFocused();
    const store = useContext(StoreContext);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        if (!store.location) return;
        setLatitude(store.location.coords.latitude);
        setLongitude(store.location.coords.longitude);
    }, [isFocused]);


    if (!latitude || !longitude) return (
        <Text>Chargement de la carte...</Text>
    )

    return (
        <MapView
            style={{height: '100%'}}
            region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker coordinate={{latitude: latitude, longitude: longitude}}
                    title={'toto'} description={'pkneeokenrn'}/>
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