import {Image} from "react-native";
import {iconStyles} from "../../assets/styles/icons";

const icons = {
    home: require('../../assets/icons/home.png'),
    homeActive: require('../../assets/icons/home-active.png'),
    quote: require('../../assets/icons/quote.png'),
    quoteActive: require('../../assets/icons/quote-active.png'),
    paw: require('../../assets/icons/paw.png'),
    pawActive: require('../../assets/icons/paw-active.png'),
    pawWhite: require('../../assets/icons/paw-white.png'),
    checkGreen: require('../../assets/icons/check-green.png'),
    crossRed: require('../../assets/icons/cross-red.png'),
    map: require('../../assets/icons/map.png'),
    mapActive: require('../../assets/icons/map-active.png'),
}

export default function Icon({name, style, isActive = false}) {
    /***
     * Returns Image component with icon
     */
    const source = icons[name + (isActive ? 'Active' : '')];
    return <Image source={source} style={{...iconStyles.icon, ...style}}/>;
}