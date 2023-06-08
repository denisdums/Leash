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
        /***
         * Get current session at the launch of the app
         */
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
            Promise.allSettled([
                updateLocation(),
                updateUser(session?.user.id),
            ]).then(() => {
                setUpdating(false);
            });
        });

        /***
         * Listen to auth state changes
         */
        const {data: authListener} = supabase.auth.onAuthStateChange(async (event, session) => {
            setUpdating(true);
            /***
             * If there is no session, set the session to null and update the user
             */
            if (!session) {
                setSession(null);
                setUpdating(false);
                await updateUser(null);
            } else {
                /***
                 * If there is a session, update the session and the user
                 */
                setSession(session);
                Promise.allSettled([updateUser(session.user.id)]).then(() => {
                    setUpdating(false);
                });
            }
        });

        return () => {
            authListener.subscription
        };
    }, []);


    return (
        /***
         * Provide the user, the session and the location to the children
         */
        <StoreContext.Provider value={{user, updating, session, location}}>
            {children}
        </StoreContext.Provider>
    );

    async function updateUser(userUID) {
        /***
         * If there is no userUID, set the user to null and return a promise
         */
        if (!userUID) {
            setUser(null);
            return new Promise((resolve, reject) => resolve(null));
        }

        /***
         * Get the user data and set the user
         */
        const user = await UserService.getUserData(userUID);
        setUser(user);
        return new Promise((resolve, reject) => {
            resolve(user);
        });
    }

    async function updateLocation() {
        /***
         * Get the location permission and the location
         */
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return new Promise((resolve, reject) => resolve(null));
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        return new Promise((resolve, reject) => resolve(location));
    }
};