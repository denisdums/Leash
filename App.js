import {StoreProvider} from "./src/contexts/StoreContext";
import Root from "./src/components/Root";
import {useFonts} from "@expo-google-fonts/urbanist";
import usedGoogleFonts from "./config/googleFonts";
import {useEffect, useState} from "react";
import Loader from "./src/components/Loader";

export default function App() {
    const [fontLoaded] = useFonts({...usedGoogleFonts});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, []);

    if (!fontLoaded || loading) return <Loader/>;

    return (
        <StoreProvider>
            <Root/>
        </StoreProvider>
    );

}
