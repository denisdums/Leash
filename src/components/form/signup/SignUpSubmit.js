import {View, ActivityIndicator, SafeAreaView, StyleSheet, Text} from "react-native";
import {formStyles} from "../../../../assets/styles/form";
import {colors, colorStyles} from "../../../../assets/styles/colors";
import {fontStyles} from "../../../../assets/styles/styles";

export default function SignUpSubmit() {
    return (
        <View style={{...formStyles.wrapper, backgroundColor: colors.purple}}>
            <SafeAreaView style={styles.wrapper}>
                <View>
                    <Text style={{...fontStyles.subHeading, ...colorStyles.white, ...styles.heading}}>Création de votre profil en cours...</Text>
                    <ActivityIndicator size="large" color={'white'}/>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    heading: {
        textAlign: 'center',
        marginBottom: 20,
    }
});