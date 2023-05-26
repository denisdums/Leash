import React, {createContext, useEffect, useState} from 'react';
import UserService from "../../services/user.service";
import supabase from "../../config/supabaseConfig";
import * as Location from 'expo-location';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [location, setLocation] = useState(null);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setUpdating(true);
            setSession(session);
            (async () => updateLocation())();
            Promise.allSettled([
                updateUser(session.user.id),
            ]).then(() => {
                setUpdating(false);
            });
        });

        const {data: authListener} = supabase.auth.onAuthStateChange(async (event, session) => {
            setUpdating(true);
            setSession(session);

            Promise.allSettled([updateUser(session.user.id)]).then(() => {
                setUpdating(false);
            });
        });


        return () => {
            authListener.subscription
        };
    }, []);


    return (
        <StoreContext.Provider value={{user, updating, session, location}}>
            {children}
        </StoreContext.Provider>
    );

    async function updateUser(userUID) {
        const user = await UserService.getUserData(userUID);
        setUser(user);
        return new Promise((resolve, reject) => {
            resolve(user);
        });
    }

    async function updateLocation() {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return new Promise((resolve, reject) => resolve(null));
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        return new Promise((resolve, reject) => resolve(location));
    }
};