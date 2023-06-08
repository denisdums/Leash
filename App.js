import {StoreProvider} from "./src/contexts/StoreContext";
import Root from "./src/components/Root";
import {useFonts} from "@expo-google-fonts/urbanist";
import usedGoogleFonts from "./config/googleFonts";
import {useEffect, useState} from "react";
import Loader from "./src/components/Loader";

export default function App() {
    /***
     * Loads the fonts
     */
    const [fontLoaded] = useFonts({...usedGoogleFonts});
    /***
     * Sets the loading state to true
     */
    const [loading, setLoading] = useState(true);

    /***
     * Set minimum loading time to 1 second for animation
     */
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, []);

    /***
     * Displays the loader if the fonts are not loaded or if the loading state is true
     */
    if (!fontLoaded || loading) return <Loader/>;

    return (
        /***
         * Provides the store to the children and displays the Root component
         */
        <StoreProvider>
            <Root/>
        </StoreProvider>
    );

}
